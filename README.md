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
