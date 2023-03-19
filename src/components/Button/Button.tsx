import { Text } from '../Text';
import * as S from './Button.styles';
import { ButtonProps } from './interfaces';

export const Button = ({ children, onPress, disabled }: ButtonProps) => {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text color="#ffffff" weight="600">
        {children}
      </Text>
    </S.Container>
  );
};
