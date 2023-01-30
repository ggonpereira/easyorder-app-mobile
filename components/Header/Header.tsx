import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import * as S from './Header.styles';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <S.Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Welcome to
          </Text>

          <Text size={24} weight="700">
            EasyOrder
            <Text size={24}>App</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <S.Content>
          <S.OrderHeader>
            <Text size={24} weight="600">
              Order
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} color="#2066FC" weight="600">
                cancel order
              </Text>
            </TouchableOpacity>
          </S.OrderHeader>

          <S.Table>
            <Text size={14}>Table {selectedTable}</Text>
          </S.Table>
        </S.Content>
      )}
    </S.Container>
  );
};
