import { Pressable, PressableProps, Text } from 'react-native'

export type ButtonProps = {
  children: string;
  fullW?: boolean;
  textClassName?: string;
} & PressableProps;

const Button = ({ children, className, disabled, textClassName, fullW = false, ...props }: ButtonProps) => (
  <Pressable
    {...props}
    disabled={disabled}
    className={`px-6 py-4 bg-[#F8B800] rounded-lg text-black mx-auto ${fullW ? 'w-full' : 'w-auto'} ${className} ${disabled ? 'opacity-[.5]' : ''}`}
  >
    <Text className={`text-center text-md font-semibold ${textClassName}`}>
      {children}
    </Text>
  </Pressable>
);

export default Button;
