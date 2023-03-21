import { API_URL } from '@env';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useCartContext } from '../../context/CartContext';
import { formatToLocalePrice } from '../../utils/functions';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';
import * as S from './Cart.styles';
import { CartProps } from './interfaces';

export const Cart = ({ handleConfirmOrder }: CartProps) => {
  const { cartItems, handleAddItemToCart, handleDecrementItemFromCart } =
    useCartContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (prev, curr) => prev + curr.product.price * curr.quantity,
    0,
  );

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    handleConfirmOrder();
  };

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOkButtonClick={handleCloseModal}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item: { product, quantity }, index }) => (
            <S.Item
              style={{ marginBottom: ++index !== cartItems.length ? 22 : 0 }}
            >
              <S.Product>
                <S.ProductImage
                  source={{
                    uri: `${API_URL}/uploads/${product.imagePath}`,
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

                <TouchableOpacity
                  onPress={() => handleDecrementItemFromCart(product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </S.Actions>
            </S.Item>
          )}
        />
      )}

      <S.Summary>
        <S.TotalContainer>
          {cartItems.length !== 0 ? (
            <>
              <Text color="#666666">Total</Text>
              <Text size={20} weight="600">
                {formatToLocalePrice(totalPrice)}
              </Text>
            </>
          ) : (
            <Text color="#999999">Your cart is empty</Text>
          )}
        </S.TotalContainer>

        <Button
          onPress={handleOpenModal}
          disabled={cartItems.length === 0}
          isLoading={isLoading}
        >
          Confirm Order
        </Button>
      </S.Summary>
    </>
  );
};
