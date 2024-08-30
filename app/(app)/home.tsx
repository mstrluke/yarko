import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Button from '../../components/button';

const Home = () => {
  const points = 1222;

  const handlePressAbout = () => router.push('/about');

  return (
    <ScrollView className='bg-white'>
      <View className='flex flex-col gap-6 px-4 pb-20'>
        <View className='flex items-center justify-center relative rounded-full m-auto'>
          <Svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
            <Circle r="88" cx="90" cy="90" fill="transparent" stroke="#f4e7cc" strokeWidth="4" strokeDasharray="565.48px" strokeDashoffset="0" />
            <Circle r="88" cx="90" cy="90" stroke="#F8B800" strokeWidth="4" strokeLinecap="round" strokeDashoffset="118.692px" fill="transparent" strokeDasharray="565.48px" />
          </Svg>
          <View className='absolute flex text-center items-center mt-4'>
            <Text className='font-bold text-6xl'>{points}</Text>
            <Text>баллов</Text>
          </View>
        </View>

        <Text className='text-center'>Еще 772 балла до 100$</Text>
        <Button>Travel Lifestyle</Button>

        <View className='flex flex-col gap-4'>
          <View className='flex flex-row justify-between flex-wrap items-center'>
            <Text className='font-semibold text-lg'>Задания</Text>
            <Pressable>
              <Text className='text-[#4A4A4A]'>Все</Text>
            </Pressable>
            <Text className='w-full text-[#87878D]'>Как зарабатывать балы?</Text>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <Text>Запостить сторис про нас</Text>
            <Text className='bg-[#f4e7cc] p-2 rounded-lg'>+345</Text>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <Text>Лайкни хуемое</Text>
            <Text className='bg-[#f4e7cc] p-2 rounded-lg'>+228</Text>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <Text>PUMA</Text>
            <Text className='bg-[#f4e7cc] p-2 rounded-lg'>+500</Text>
          </View>
        </View>

        <View className='shadow-md shadow-gray-300 bg-white rounded-xl p-4 flex flex-col gap-4'>
          <Text className='font-semibold text-lg'>Travel Lifestyle</Text>
          <Text className='text-md mb-4'>Получай пассивный доход вместе с клубом путешественников</Text>
          <Button fullW onPress={handlePressAbout}>Узнать больше</Button>
        </View>

        <View className='flex flex-col gap-4'>
          <View className='flex flex-row justify-between items-center'>
            <Text className='font-semibold text-lg'>История</Text>
            <Pressable>
              <Text className='text-[#4A4A4A]'>Все</Text>
            </Pressable>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <View className='flex flex-col gap-1'>
              <Text>Покупка в “ЯРКО”</Text>
              <Text className='w-full text-[#87878D] text-sm'>18 ИЮНЯ 2023, 04:20</Text>
            </View>
            <Text className='text-[#87878D]'>+345</Text>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <View className='flex flex-col gap-1'>
              <Text>Покупка в магазине “Колобок”</Text>
              <Text className='w-full text-[#87878D] text-sm'>18 ИЮНЯ 2023, 04:20</Text>
            </View>
            <Text className='text-[#87878D]'>+345</Text>
          </View>
          <View className='flex flex-row justify-between items-center'>
            <View className='flex flex-col gap-1'>
              <Text>Выполнения задания</Text>
              <Text className='w-full text-[#87878D] text-sm'>18 ИЮНЯ 2023, 04:20</Text>
            </View>
            <Text className='text-[#87878D]'>+345</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
