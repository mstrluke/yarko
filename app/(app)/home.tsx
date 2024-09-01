import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Button from '../../components/button';

const tasks = [
  { title: 'Запостить сторис про нас', point: 345 },
  { title: 'Лайкни хуемое', point: 345 },
  { title: 'Купить кроссовки', brand: 'puma', point: 345 },
];

const Home = () => {
  const points = 1222;
  const pointsToEnd = 2000;
  const progress = (pointsToEnd - points) / (2000 / 100) * (550 / 100);
  const handlePressAbout = () => router.push('/about');
  const handlePressTasks = () => router.push('/tasks');
  const handlePressNetwork = () => router.push('/network');
  const handlePressTask = (id: number) => () => router.push(`/${id}`);
  const handlePressHistory = () => router.push('/history');

  return (
    <ScrollView className='bg-white'>
      <View className='flex flex-col gap-6 px-4 pb-20'>
        <View className='flex items-center justify-center relative rounded-full m-auto'>
          <View className='-rotate-90'>
            <Svg width={180} height={180} viewBox='0 0 180 180'>
              <Circle r={88} cx={90} cy={90} stroke='#f4e7cc' strokeWidth={4} strokeDasharray={550} strokeDashoffset={0} fill='transparent' />
              <Circle r={88} cx={90} cy={90} stroke='#F8B800' strokeWidth={4} strokeDasharray={550} strokeDashoffset={progress} fill='transparent' strokeLinecap='round' />
            </Svg>
          </View>
          <View className='absolute flex text-center items-center mt-4'>
            <Text className='font-bold text-6xl'>{points}</Text>
            <Text>баллов</Text>
          </View>
        </View>

        <Text className='text-center'>Еще {pointsToEnd - points} балла до 100$</Text>
        <Button onPress={handlePressNetwork}>Travel Lifestyle</Button>

        <View className='flex flex-col gap-4'>
          <View className='flex flex-row justify-between flex-wrap items-center'>
            <Text className='font-semibold text-lg'>Задания</Text>
            <Pressable onPress={handlePressTasks}>
              <Text className='text-[#4A4A4A]'>Все</Text>
            </Pressable>
            <Text className='w-full text-[#87878D]'>Как зарабатывать балы?</Text>
          </View>
          {tasks.map((x, idx) => (
            <Pressable onPress={handlePressTask(idx)}>
              <View className='flex flex-row justify-between items-center'>
                <View className='flex flex-col justify-start'>
                  {x.brand && <Text className='text-[#F8B800] text-sm uppercase'>{x.brand}</Text>}
                  <Text>{x.title}</Text>
                </View>
                <Text className='overflow-hidden bg-[#f4e7cc] p-2 rounded-md my-auto'>+500</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View className='flex flex-col gap-4'>
          <View className='flex flex-row justify-between items-center'>
            <Text className='font-semibold text-lg'>История</Text>
            <Pressable onPress={handlePressHistory}>
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

        <View className='shadow-md shadow-gray-300 bg-white rounded-xl p-4 flex flex-col gap-4'>
          <Text className='font-semibold text-lg'>Travel Lifestyle</Text>
          <Text className='text-md mb-4'>Получай пассивный доход вместе с клубом путешественников</Text>
          <Button fullW onPress={handlePressAbout}>Узнать больше</Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
