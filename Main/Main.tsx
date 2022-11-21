import * as S from './Main.styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  const handleButtonPress = () => {
    setIsTableModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsTableModalVisible(false);
  };

  return (
    <>
      <S.Container>
        <Header />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {!selectedTable && (
            <Button onPress={handleButtonPress}>New Order</Button>
          )}
        </S.FooterContainer>
      </S.Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveTable}
      />
    </>
  );
};
