import { router } from 'expo-router';
import { Switch, Text, View } from 'react-native';
import Button from '../../components/button';

const Profile = () => {
  const handlePressClose = () => {
    router.back();
  }
  return (
    <View className='flex flex-col gap-4 bg-white p-4 pb-10 flex-1'>
      <Text className='text-3xl font-bold text-black text-center'>Настройки</Text>
      <View className='flex gap-1'>
        <Text className='text-[#9F9F9F]'>Имя</Text>
        <Text>Жаныбек</Text>
      </View>
      <View className='flex gap-1'>
        <Text className='text-[#9F9F9F]'>Телефон</Text>
        <Text>+996 557 957 457</Text>
      </View>
      <View className='flex gap-1'>
        <Text className='text-[#9F9F9F]'>Почта</Text>
        <Text>exwaiai@gmail.com</Text>
      </View>
      <View className='flex gap-1 mb-auto'>
        <Text className='text-[#9F9F9F]'>Уведомления</Text>
        <View className='flex flex-row justify-between items-center'>
          <Text>Пуш уведомления, почта, смс</Text>
          <Switch />
        </View>
      </View>
      <Button fullW textClassName='text-white'>Выйти из профиля</Button>
      <Button fullW className='bg-red-500' textClassName='text-white'>Удалить профиль</Button>
    </View>
  );
}

export default Profile;
