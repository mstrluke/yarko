import { Text, View } from 'react-native';
import Button from '../../components/button';
import { router } from 'expo-router';

const About = () => {
  const handlePress = () => router.back();
  return (
    <View className='flex flex-1 flex-col p-4 pb-10 justify-center'>
      <View className='m-auto flex'>
        <Text className='text-black font-semibold text-4xl text-center'>Как работает</Text>
        <Text className='text-black font-semibold text-4xl text-center mb-10'>Travel Lifestyle?</Text>
        <Text className='font-regular my-4'>Объяснения туда сюда как это все работает туда сюда как это все работает туда сюда как это все работает туда сюда как это все работает</Text>
        <Text className='font-semibold'>Баланс справа и слева</Text>
        <Text className='text-md mb-4'>Объяснения туда сюда как соблюдать баланс</Text>
        <Text className='text-md'>По мере роста вашей сети вы будете получать по башке</Text>
      </View>
      <Button fullW className='bottom-20 mx-4' onPress={handlePress}>Понятно</Button>
    </View>
  );
}

export default About;
