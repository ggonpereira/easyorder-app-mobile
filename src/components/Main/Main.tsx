import { useState } from 'react';
import * as S from './Main.styles';
import { Header } from '../Header';
import { Categories } from '../Categories';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { TableModal } from '../TableModal';
import { Footer } from '../Footer';
import { Cart } from '../Cart';
import { useCartContext } from '../../context/CartContext';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const { handleClearCart } = useCartContext();

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  const handleButtonPress = () => {
    setIsTableModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsTableModalVisible(false);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
    handleClearCart();
  };

  return (
    <>
      <S.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu
            selectedTable={selectedTable}
            handleOpenNewOrderModal={handleButtonPress}
          />
        </S.MenuContainer>
      </S.Container>

      <Footer>
        {!selectedTable && (
          <Button onPress={handleButtonPress}>New Order</Button>
        )}

        {selectedTable && <Cart />}
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveTable}
      />
    </>
  );
};
