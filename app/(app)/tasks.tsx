import { Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';

const data = Array.from({ length: 20 }).flatMap((_idx) => [
  { title: 'Запостить сторис про нас', point: 345 },
  { title: 'Лайкнуть и репостнуть', point: 345 },
  { title: 'Купить кроссовки', brand: 'puma', point: 345 },
])

const Tasks = () => {
  const handlePress = (id: number) => () => router.push(`/${id}`);

  return (
    <ScrollView className='bg-white'>
      <View className='flex flex-col gap-4 bg-white p-4 pb-10 flex-1'>
        <Text className='font-semibold text-center text-4xl mb-4'>Задания</Text>
        {data.map((x, idx) => (
          <Pressable onPress={handlePress(idx)} key={idx}>
            <View className='flex flex-row py-2 justify-between border-b-2 border-gray-100'>
              <View className='flex flex-col justify-start'>
                {x.brand && <Text className='text-[#F8B800] text-sm uppercase'>{x.brand}</Text>}
                <Text>{x.title}</Text>
              </View>
              <Text className='overflow-hidden bg-[#f4e7cc] p-2 rounded-md my-auto'>+{x.point}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

export default Tasks;
