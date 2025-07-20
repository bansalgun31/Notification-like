import { useEffect, useState, useRef } from 'react';
import { AppState } from 'react-native';
import * as Notifications from 'expo-notifications';
import { NotificationService } from '@/services/NotificationService';

export interface NotificationData {
  id: string;
  title: string;
  body: string;
  data?: any;
  timestamp: number;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [pushToken, setPushToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    initializeNotifications();

    // Listen for app state changes
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
    });

    return () => {
      subscription?.remove();
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const initializeNotifications = async () => {
    try {
      const notificationService = NotificationService.getInstance();
      
      // Initialize service and get token
      const token = await notificationService.initialize();
      setPushToken(token);
      
      // Configure notification channels
      await notificationService.configurePushNotifications();
      await notificationService.setNotificationCategories();
      
      // Listen for notifications received while app is running
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log('Notification received:', notification);
        
        const newNotification: NotificationData = {
          id: notification.request.identifier,
          title: notification.request.content.title || 'Notification',
          body: notification.request.content.body || '',
          data: notification.request.content.data,
          timestamp: Date.now(),
        };
        
        setNotifications(prev => [newNotification, ...prev]);
      });

      // Listen for notification responses (user taps)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log('Notification response:', response);
        handleNotificationResponse(response);
      });

      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize notifications:', error);
    }
  };

  const handleNotificationResponse = (response: Notifications.NotificationResponse) => {
    const { notification, actionIdentifier } = response;
    const data = notification.request.content.data;

    if (data?.type === 'incoming_call') {
      if (actionIdentifier === 'answer') {
        console.log('Call answered:', data.caller);
        // Handle call answer logic here
      } else if (actionIdentifier === 'decline') {
        console.log('Call declined:', data.caller);
        // Handle call decline logic here
      }
    }
  };

  const sendTestNotification = async () => {
    const notificationService = NotificationService.getInstance();
    await notificationService.scheduleLocalNotification(
      'Test Notification',
      'This is a test notification from your app!'
    );
  };

  const simulateIncomingCall = async (callerName: string = 'John Doe') => {
    const notificationService = NotificationService.getInstance();
    await notificationService.simulateIncomingCall(callerName);
  };

  const clearNotifications = () => {
    setNotifications([]);
    Notifications.dismissAllNotificationsAsync();
  };

  return {
    notifications,
    pushToken,
    isInitialized,
    sendTestNotification,
    simulateIncomingCall,
    clearNotifications,
  };
}