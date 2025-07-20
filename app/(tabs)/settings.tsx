import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Bell, Smartphone, Code, ExternalLink } from 'lucide-react-native';
import * as Notifications from 'expo-notifications';

export default function SettingsScreen() {
  const openNotificationSettings = async () => {
    try {
      await Notifications.openSettingsAsync();
    } catch (error) {
      Alert.alert('Error', 'Could not open notification settings');
    }
  };

  const showNativeModuleInfo = () => {
    Alert.alert(
      'Native Module Development',
      'To implement custom native modules with Java/Kotlin:\n\n' +
      '1. Export this project from Bolt\n' +
      '2. Create an Expo Development Build\n' +
      '3. Add custom native modules\n' +
      '4. Test on physical device\n\n' +
      'This demo shows Expo\'s notification capabilities.',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Settings size={48} color="#4CAF50" />
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>
          
          <TouchableOpacity style={styles.settingItem} onPress={openNotificationSettings}>
            <Bell size={24} color="#666" />
            <View style={styles.settingContent}>
              <Text style={styles.settingText}>System Notification Settings</Text>
              <Text style={styles.settingSubtext}>Configure app notification permissions</Text>
            </View>
            <ExternalLink size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Development</Text>
          
          <TouchableOpacity style={styles.settingItem} onPress={showNativeModuleInfo}>
            <Code size={24} color="#666" />
            <View style={styles.settingContent}>
              <Text style={styles.settingText}>Native Module Development</Text>
              <Text style={styles.settingSubtext}>Learn about Java/Kotlin integration</Text>
            </View>
            <ExternalLink size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About This Demo</Text>
          <Text style={styles.infoText}>
            This React Native app demonstrates push notifications similar to WhatsApp. 
            It includes high-priority notifications, background handling, and Android 15 compatibility.
          </Text>
          <Text style={styles.infoText}>
            For production use with custom native modules, export this project and create 
            an Expo Development Build.
          </Text>
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
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
    paddingBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingContent: {
    flex: 1,
    marginLeft: 12,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  settingSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
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
    lineHeight: 20,
    marginBottom: 8,
  },
});