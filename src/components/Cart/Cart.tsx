import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { useCartContext } from '../../context/CartContext';
import { formatToLocalePrice } from '../../utils/functions';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import * as S from './Cart.styles';

export const Cart = () => {
  const { cartItems, handleAddItemToCart, handleRemoveItemFromCart } =
    useCartContext();

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: { product, quantity }, index }) => (
        <S.Item style={{ marginBottom: ++index !== cartItems.length ? 22 : 0 }}>
          <S.Product>
            <S.ProductImage
              source={{
                uri: `http://192.168.0.109:3001/uploads/${product.imagePath}`,
              }}
            />

            <S.Quantity style={{ marginHorizontal: 12 }}>
              <Text size={14} color="#999999">
                {quantity}x
              </Text>
            </S.Quantity>

            <S.ProductInformation>
              <Text
                size={14}
                weight="600"
                color="#333333"
                style={{ marginBottom: 4 }}
              >
                {product.name}
              </Text>
              <Text size={14} color="#666666">
                {formatToLocalePrice(product.price)}
              </Text>
            </S.ProductInformation>
          </S.Product>

          <S.Actions>
            <TouchableOpacity
              onPress={() => handleAddItemToCart(product)}
              style={{ marginRight: '8.3%' }}
            >
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRemoveItemFromCart(product)}>
              <MinusCircle />
            </TouchableOpacity>
          </S.Actions>
        </S.Item>
      )}
    />
  );
};
