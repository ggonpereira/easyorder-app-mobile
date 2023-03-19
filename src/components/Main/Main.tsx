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
import { products as productsMock } from '../../mocks/products';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [isLoading] = useState(false);
  const [products] = useState(productsMock);

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

  const handleResetOrder = () => {
    setSelectedTable('');
    handleClearCart();
  };

  return (
    <>
      <S.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        <S.CategoriesContainer>
          <Categories isLoading={isLoading} />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu
            products={products}
            selectedTable={selectedTable}
            handleOpenNewOrderModal={handleButtonPress}
            isLoading={isLoading}
          />
        </S.MenuContainer>
      </S.Container>

      <Footer>
        {!selectedTable && (
          <Button onPress={handleButtonPress} isLoading={isLoading}>
            New Order
          </Button>
        )}

        {selectedTable && <Cart handleConfirmOrder={handleResetOrder} />}
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveTable}
      />
    </>
  );
};
