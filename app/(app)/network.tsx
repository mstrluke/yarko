import { Text, View } from 'react-native';

const Network = () => {
  return (
    <View className='flex flex-1 flex-col bg-white gap-4 p-4'>
      <Text className='text-black font-bold text-2xl'>Доход от сети</Text>
      <View className='flex flex-row gap-2 items-center'>
        <View className='flex gap-2 bg-[#f4e7cc] overflow-hidden rounded-md  p-4 items-center'>
          <Text>Общий доход:</Text>
          <Text className='overflow-hidden text-[green] p-2 rounded-md'>600$</Text>
        </View>
        <View className='flex gap-2 bg-[#f4e7cc] overflow-hidden rounded-md  p-4 items-center'>
          <Text>Месячный доход:</Text>
          <Text className='overflow-hidden text-[green] p-2 rounded-md'>150$</Text>
        </View>
      </View>
      <View className='flex flex-row gap-2'>
        <Text className='text-black font-bold text-2xl'>Моя сеть</Text>
        <Text className='text-[#F8B800] p-2 text-sm overflow-hidden rounded-md text-center'>До увеличения дохода требуется 7 человек</Text>
      </View>
      <Text className='text-[#F8B800] text-3xl m-auto'>Upcoming soon</Text>
    </View>
  );
}

export default Network;
