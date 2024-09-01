import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Network = () => {
  return (
    <View className='flex flex-1 flex-col bg-white gap-4 p-4'>
      <Text className='text-black font-bold text-3xl'>Доход от сети</Text>
      <View className='flex flex-row gap-2'>
        <Text>Общий доход:</Text>
        <Text>600$</Text>
      </View>
      <View className='flex flex-row gap-2 mb-6'>
        <Text>Месячный доход:</Text>
        <Text>150$</Text>
      </View>
      <Text className='text-black font-bold text-2xl text-center'>Моя сеть</Text>
      <Text className='bg-[#F8B800] p-2 px-4 overflow-hidden rounded-md text-center mx-auto'>До увеличения дохода требуется 7 человек</Text>
    </View>
  );
}

export default Network;
