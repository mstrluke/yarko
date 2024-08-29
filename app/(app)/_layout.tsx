import { Redirect, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { useSession } from '../../contexts/session';

export const unstable_settings = {
  initialRouteName: 'home',
};

function LogoTitle() {
  return (
    <View className='flex justify-center p-6'>
      <Image className='w-[24px] h-[24px] m-auto' source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    </View>
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
        header: () => <LogoTitle />,
        headerRight: null,
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
  );
}
