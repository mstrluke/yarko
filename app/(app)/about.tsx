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
        <Text className='font-regular my-4'>
          Travel Lifestyle – это концепция, объединяющая путешествия и образ жизни, ориентированный на постоянное движение и исследование новых мест. Эта идея не ограничивается просто частыми поездками; она включает в себя целый ряд практик и привычек, которые помогают сделать путешествия частью повседневной жизни. Вот основные аспекты, которые объясняют, как работает Travel Lifestyle
        </Text>
        <Text className='font-semibold'>Баланс справа и слева</Text>
        <Text className='text-md mb-4'>Количество людей в каждой ветке сети что бы понимать какая ветка лучше приности доход</Text>
        <Text className='text-md'>По мере роста вашей сети вы будете получать по заработную плату каждый месяц с учетом количества людей в вашей сети</Text>
      </View>
      <Button fullW className='bottom-20 mx-4' onPress={handlePress}>Понятно</Button>
    </View>
  );
}

export default About;
