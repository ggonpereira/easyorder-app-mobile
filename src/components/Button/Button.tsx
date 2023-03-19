import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as S from './Button.styles';
import { ButtonProps } from './interfaces';

export const Button = ({
  children,
  onPress,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <S.Container onPress={onPress} disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text color="#ffffff" weight="600">
          {children}
        </Text>
      )}
    </S.Container>
  );
};
