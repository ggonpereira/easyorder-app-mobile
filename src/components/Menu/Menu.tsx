import { API_URL } from '@env';
import { Skeleton } from '@rneui/themed/dist/Skeleton';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { useCartContext } from '../../context/CartContext';
import { Product } from '../../types/Product';
import { formatToLocalePrice, trimLongText } from '../../utils/functions';
import { Empty } from '../Icons/Empty';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { MenuProps } from './interfaces';
import * as S from './Menu.styles';

const LoadedMenu = ({
  products,
  selectedTable,
  handleOpenNewOrderModal,
}: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectedProduct = useRef<null | Product>(null);

  const { handleAddItemToCart: addItemToCart } = useCartContext();

  const handleOpenProductModal = (product: Product) => {
    selectedProduct.current = product;
    setIsModalVisible(true);
  };

  const handleCloseProductModal = () => {
    selectedProduct.current = null;
    setIsModalVisible(false);
  };

  const handleAddItemToCart = (product: Product) => {
    if (!selectedTable) {
      handleOpenNewOrderModal();
    }
    addItemToCart(product);
  };

  if (products.length === 0) {
    return (
      <S.CenteredContainer>
        <Empty />

        <Text style={{ marginTop: 24 }} weight="600" color="#666666">
          No products found!
        </Text>
      </S.CenteredContainer>
    );
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={handleCloseProductModal}
        product={selectedProduct.current}
        addItemToCart={handleAddItemToCart}
      />

      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        ItemSeparatorComponent={S.Separator}
        renderItem={({ item: product }) => (
          <S.Product onPress={() => handleOpenProductModal(product)}>
            <S.ProductImage
              source={{
                uri: `${API_URL}/uploads/${product.imagePath}`,
              }}
            />

            <S.ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text
                color="#666666"
                size={14}
                style={{ marginVertical: 8, lineHeight: 21 }}
              >
                {trimLongText(product.description)}
              </Text>
              <Text size={14} color="#333" weight="600">
                {formatToLocalePrice(product.price)}
              </Text>
            </S.ProductDetails>

            <S.AddToCartButton onPress={() => handleAddItemToCart(product)}>
              <PlusCircle />
            </S.AddToCartButton>
          </S.Product>
        )}
      />
    </>
  );
};

const LoadingMenu = () => (
  <FlatList
    data={[...Array(6)]}
    style={{ marginTop: 32 }}
    contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
    ItemSeparatorComponent={S.Separator}
    renderItem={({ index }) => (
      <Skeleton key={index} height={105} style={{ marginRight: 12 }} />
    )}
  />
);

export const Menu = ({
  products,
  selectedTable,
  handleOpenNewOrderModal,
  isLoading,
}: MenuProps) => (
  <>
    {isLoading ? (
      <LoadingMenu />
    ) : (
      <LoadedMenu
        products={products}
        selectedTable={selectedTable}
        handleOpenNewOrderModal={handleOpenNewOrderModal}
      />
    )}
  </>
);
