import { router } from 'expo-router';
import { Pressable, View, Image } from 'react-native';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const Header = () => {
  const onPress = () => router.push('profile');

  return (
    <View className='flex justify-center p-6 relative bg-white flex-row items-center'>
      <Pressable onPress={onPress} className='absolute my-auto mx-4 left-0'>
        <Svg width="24" height="24" viewBox="0 0 30 30">
          <G clipPath="url(#clip0_1_6)">
            <Path d="M17.5 13C17.5 14.3807 16.3807 15.5 15 15.5C13.6193 15.5 12.5 14.3807 12.5 13C12.5 11.6193 13.6193 10.5 15 10.5C16.3807 10.5 17.5 11.6193 17.5 13Z" stroke="black" strokeWidth="5" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M7.05087 23.9897C7.50136 21.7447 10.8885 20 15 20C19.1115 20 22.4986 21.7447 22.9491 23.9897C25.4336 21.7911 27 18.5785 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 18.5785 4.56637 21.7911 7.05087 23.9897ZM30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z" fill="black" />
          </G>
          <Defs>
            <ClipPath id="clip0_1_6">
              <Rect width="30" height="30" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      </Pressable>
      <Image className='!w-[24px] !h-[24px] m-auto' source={require('../assets/logo.png')} />
    </View>
  );
}

export default Header;
