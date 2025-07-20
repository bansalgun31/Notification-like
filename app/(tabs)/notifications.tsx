import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NotificationList } from '@/components/NotificationList';
import { useNotifications } from '@/hooks/useNotifications';

export default function NotificationsScreen() {
  const { notifications, clearNotifications } = useNotifications();

  return (
    <SafeAreaView style={styles.container}>
      <NotificationList 
        notifications={notifications} 
        onClear={clearNotifications}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});