# Notification-like

A small Expo + React Native demo app showing a notification-style list and simple notification handling using `expo-notifications` and `expo-router`.

## Features
- Notification list UI with example items
- Local notification handling via `NotificationService`
- Simple router structure using `expo-router`
- TypeScript sources and hooks for framework readiness and notifications

## Repo structure
- `app/`: Expo Router entry and screens
- `components/NotificationList.tsx`: List UI component
- `services/NotificationService.ts`: Notification helper (scheduling, handling)
- `hooks/`: Custom hooks (`useNotifications`, `useFrameworkReady`)
- `assets/`: Images and static assets

## Prerequisites
- Node.js (LTS recommended)
- npm (or yarn/pnpm) installed
- For mobile testing: Expo Go app on your device, or an Android/iOS simulator

## Install
Open a terminal in the project root and run:

```powershell
npm install
```

## Run (development)
Start the Expo dev server:

```powershell
npm run dev
```

This runs the script defined in `package.json` (`expo start`). Use the Expo dev tools to open in your simulator, device via QR code, or web.

## Build for web
To export a web build (see `package.json`):

```powershell
npm run build:web
```

## Lint
Run the project's linter (configured via Expo):

```powershell
npm run lint
```

## Notes
- The project uses Expo SDK and is configured as an Expo Router app. If you encounter issues starting, ensure your global tooling (e.g., `expo` CLI) is up-to-date or run via the locally installed binary with `npx expo`.
- This README is a brief developer guide — update it with screenshots, badges, or contribution guidelines as needed.

## License
See repository for license information (no license file included by default).
# WhatsApp-Like Push Notifications - React Native

This React Native app demonstrates real-time push notifications similar to WhatsApp, with support for Android 15.

## Features Implemented

- ✅ Real-time push notifications using Expo Notifications
- ✅ Background and killed app notification handling
- ✅ High-priority call notifications with custom channels
- ✅ Action buttons for call notifications (Answer/Decline)
- ✅ Android 15 compatibility with latest notification APIs
- ✅ Custom notification categories and channels
- ✅ Push token management
- ✅ Local notification scheduling

## Architecture

### Core Components

1. **NotificationService** - Singleton service handling all notification logic
2. **useNotifications Hook** - React hook for notification state management
3. **NotificationList Component** - UI component for displaying notifications
4. **Tab-based Navigation** - Home, Notifications, Settings screens

### Key Features

- **High Priority Notifications**: Configured for maximum priority with vibration, sound, and lights
- **Call Notifications**: Special channel for incoming calls with custom actions
- **Background Handling**: Notifications work when app is backgrounded or killed
- **Android 15 Support**: Uses latest notification APIs and proper channel configuration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Test on a physical device (required for push notifications)

## For Native Module Development

**Important**: This demo uses Expo's managed workflow. For custom Java/Kotlin native modules:

1. **Export this project** from Bolt to your local machine
2. **Create an Expo Development Build**:
   ```bash
   npx create-expo-app --template
   eas build --platform android --profile development
   ```
3. **Add your custom native modules** using Expo modules API
4. **Test on physical device** with development build

### Example Native Module Structure

For custom Android native modules, you would create:

```
modules/
├── android/
│   ├── src/main/java/
│   │   └── NotificationModule.java
│   └── build.gradle
├── ios/
└── src/
    └── index.ts
```

## Firebase Integration

To integrate with Firebase Cloud Messaging:

1. Add Firebase configuration to your project
2. Configure FCM in your native Android module
3. Handle FCM tokens and message routing
4. Implement custom notification handlers

## Testing Notifications

1. **Test Notification**: Sends a basic notification
2. **Incoming Call**: Simulates WhatsApp-style call notification
3. **Background Testing**: Kill the app and trigger notifications externally




