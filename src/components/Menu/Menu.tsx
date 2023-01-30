import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Product } from '../../types/Product';
import { formatToLocalePrice, trimLongText } from '../../utils/functions';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import * as S from './Menu.styles';

export const Menu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectedProduct = useRef<null | Product>(null);

  const handleOpenModal = (product: Product) => {
    selectedProduct.current = product;
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    selectedProduct.current = null;
    setIsModalVisible(false);
  };

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        product={selectedProduct.current}
      />

      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        ItemSeparatorComponent={S.Separator}
        renderItem={({ item: product }) => (
          <S.Product onPress={() => handleOpenModal(product)}>
            <S.ProductImage
              source={{
                uri: `http://192.168.0.109:3001/uploads/${product.imagePath}`,
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

            <S.AddToCartButton>
              <PlusCircle />
            </S.AddToCartButton>
          </S.Product>
        )}
      />
    </>
  );
};