import { Pressable, PressableProps, Text } from 'react-native'

export type ButtonProps = { children: string, fullW?: boolean } & PressableProps;

const Button = ({ children, fullW = false, ...props }: ButtonProps) => (
  <Pressable {...props}>
    <Text className={`px-6 py-4 bg-[#F8B800] text-center text-md rounded-lg text-black mx-auto font-semibold ${fullW ? 'w-full' : 'w-auto'}`}>
      {children}
    </Text>
  </Pressable>
);

export default Button;
