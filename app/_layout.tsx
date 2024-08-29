import { Stack } from 'expo-router';
import { SessionProvider } from '../contexts/session';
import { StatusBar } from 'expo-status-bar';
import '../global.css'

export default function Layout() {
  return (
    <SessionProvider>
      <StatusBar style='dark' />

      <Stack
        initialRouteName='signin/index'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='(app)' options={{ animation: 'fade' }} />
        <Stack.Screen name='signin/index' options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='signup/index' options={{ animation: 'slide_from_left' }} />
      </Stack>
    </SessionProvider>
  );
}
