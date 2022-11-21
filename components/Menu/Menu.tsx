import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import { formatToLocalePrice } from '../../utils/functions';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import * as S from './Menu.styles';

export const Menu = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
      ItemSeparatorComponent={S.Separator}
      renderItem={({ item: product }) => (
        <S.Product>
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
              {product.description}
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
  );
};
