import { Text, View } from 'react-native';
import Button from '../../components/button';

const About = () => {
  return (
    <View className='flex flex-1 flex-col p-4 pb-10 items-center justify-center relative'>
      <Text className='text-black font-semibold text-4xl text-center'>Как работает</Text>
      <Text className='text-black font-semibold text-4xl text-center mb-20'>Travel Lifestyle?</Text>
      <Text className='font-regular my-4'>Объяснения туда сюда как это все работает туда сюда как это все работает туда сюда как это все работает туда сюда как это все работает</Text>
      <Text className='font-semibold'>Баланс справа и слева</Text>
      <Text className='text-md mb-4'>Объяснения туда сюда как соблюдать баланс</Text>
      <Text className='text-md mb-40'>По мере роста вашей сети вы будете получать по башке</Text>
      <Button fullW className='absolute bottom-20 mx-4 left-0 right-0 !w-auto'>Понятно</Button>
    </View>
  );
}

export default About;
