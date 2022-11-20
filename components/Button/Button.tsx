import { ReactNode } from 'react';
import { Text } from '../Text';
import * as S from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text color="#ffffff" weight="600">
        {children}
      </Text>
    </S.Container>
  );
};
