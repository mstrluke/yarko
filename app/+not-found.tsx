import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSession } from '../contexts/session';

export default function NotFound() {
  const { session } = useSession();

  const handlePress = () => { router.replace(session ? 'home' : 'signin'); }

  return (
    <View style={styles.container}>
      <Text style={styles.notfound}>404 NOT FOUND</Text>
      <Text onPress={handlePress}>
        Go to {session ? 'Home' : 'Signin'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notfound: { marginBottom: 14 },
});
