import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Phone, MessageCircle, Bell, Smartphone } from 'lucide-react-native';
import { useNotifications } from '@/hooks/useNotifications';

export default function HomeScreen() {
  const { 
    pushToken, 
    isInitialized, 
    sendTestNotification, 
    simulateIncomingCall 
  } = useNotifications();

  const handleTestNotification = async () => {
    try {
      await sendTestNotification();
      Alert.alert('Success', 'Test notification sent!');
    } catch (error) {
      Alert.alert('Error', 'Failed to send notification');
    }
  };

  const handleIncomingCall = async () => {
    try {
      await simulateIncomingCall('Sarah Johnson');
      Alert.alert('Success', 'Incoming call notification sent!');
    } catch (error) {
      Alert.alert('Error', 'Failed to send call notification');
    }
  };

  const copyTokenToClipboard = () => {
    if (pushToken) {
      Alert.alert('Push Token', pushToken);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Smartphone size={48} color="#4CAF50" />
          <Text style={styles.title}>WhatsApp-Like Notifications</Text>
          <Text style={styles.subtitle}>React Native Push Notification Demo</Text>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusItem}>
            <View style={[styles.statusDot, { backgroundColor: isInitialized ? '#4CAF50' : '#ff4757' }]} />
            <Text style={styles.statusText}>
              Notifications: {isInitialized ? 'Ready' : 'Initializing...'}
            </Text>
          </View>
          
          {pushToken && (
            <TouchableOpacity style={styles.tokenContainer} onPress={copyTokenToClipboard}>
              <Text style={styles.tokenLabel}>Push Token (tap to view):</Text>
              <Text style={styles.tokenText} numberOfLines={1}>
                {pushToken.substring(0, 40)}...
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Test Notifications</Text>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.testButton]} 
            onPress={handleTestNotification}
            disabled={!isInitialized}
          >
            <Bell size={24} color="white" />
            <Text style={styles.actionButtonText}>Send Test Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.callButton]} 
            onPress={handleIncomingCall}
            disabled={!isInitialized}
          >
            <Phone size={24} color="white" />
            <Text style={styles.actionButtonText}>Simulate Incoming Call</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.messageButton]} 
            onPress={() => simulateIncomingCall('Message Notification')}
            disabled={!isInitialized}
          >
            <MessageCircle size={24} color="white" />
            <Text style={styles.actionButtonText}>Send Message Notification</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Features Implemented:</Text>
          <Text style={styles.infoText}>• Real-time push notifications</Text>
          <Text style={styles.infoText}>• Background notification handling</Text>
          <Text style={styles.infoText}>• High-priority call notifications</Text>
          <Text style={styles.infoText}>• Custom notification channels</Text>
          <Text style={styles.infoText}>• Action buttons for calls</Text>
          <Text style={styles.infoText}>• Android 15 compatibility</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  statusContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  tokenContainer: {
    marginTop: 8,
  },
  tokenLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tokenText: {
    fontSize: 12,
    color: '#007AFF',
    fontFamily: 'monospace',
  },
  actionsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testButton: {
    backgroundColor: '#FF9800',
  },
  callButton: {
    backgroundColor: '#4CAF50',
  },
  messageButton: {
    backgroundColor: '#2196F3',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});