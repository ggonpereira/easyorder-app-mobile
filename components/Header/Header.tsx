import { Text } from '../Text';
import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Container>
      <Text size={14} opacity={0.9}>
        Welcome to
      </Text>
      <Text size={24} weight="700">
        EasyOrder
        <Text size={24}>App</Text>
      </Text>
    </S.Container>
  );
};
