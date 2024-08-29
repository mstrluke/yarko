import { Redirect, Stack } from 'expo-router';
import { Button, Image, StyleSheet, Text } from 'react-native';
import { useSession } from '../../contexts/session';

export const unstable_settings = {
  initialRouteName: 'home',
};

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) return <Text>Loading...</Text>;
  if (!session) return <Redirect href='/signin' />;

  return (
    <Stack
      initialRouteName='home'
      screenOptions={{
        headerRight: null,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle: () => <LogoTitle />,
      }}
    >
      <Stack.Screen name='home' />
      <Stack.Screen name='network' />
      <Stack.Screen name='about' options={{ presentation: 'modal' }} />
      <Stack.Screen name='profile' options={{ presentation: 'modal' }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
