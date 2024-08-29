import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSession } from '../../contexts/session';

export default function Home() {
  const { signOut } = useSession();

  const handlePress = (name: string) => () => {
    router.push(name);
  }

  return (
    <View style={styles.container}>
      <Text onPress={signOut}>
        Home
      </Text>
      <Text onPress={handlePress('about')} className='text-red-400'>About</Text>
      <Text onPress={handlePress('profile')}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});