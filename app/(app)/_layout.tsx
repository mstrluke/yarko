import { Redirect, Stack } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import { useSession } from '../../contexts/session';
import Header from '../../components/header';

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) return <Text>Loading...</Text>;
  if (!session) return <Redirect href='/signin' />;

  return (
    <SafeAreaView className='flex flex-1 bg-white'>
      <Stack
        initialRouteName='home'
        screenOptions={{
          header: () => <Header />,
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name='home' />
        <Stack.Screen name='network' />
        <Stack.Screen name='about' options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name='profile' options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
