import React from 'react';
import { FlatList, Modal } from 'react-native';
import { formatToLocalePrice } from '../../utils/functions';
import { Button } from '../Button';
import { Footer } from '../Footer';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import * as S from './ProductModal.styles';
import { ProductModalProps } from './interfaces';

export const ProductModal = ({
  visible,
  onClose,
  product,
  addItemToCart,
}: ProductModalProps) => {
  if (!product) return null;

  const handleAddItemToCart = () => {
    addItemToCart(product);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <S.Image
        source={{
          uri: `http://192.168.0.109:3001/uploads/${product.imagePath}`,
        }}
      >
        <S.CloseButton onPress={onClose}>
          <Close />
        </S.CloseButton>
      </S.Image>

      <S.ModalBody>
        <S.Header>
          <Text size={18} weight="600">
            {product.name}
          </Text>
          <Text color="#666666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </S.Header>

        {product.ingredients.length > 0 && (
          <S.IngredientsContainer>
            <Text weight="600" color="#666666" style={{ marginBottom: 16 }}>
              Ingredients
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              renderItem={({ item: ingredient }) => (
                <S.Ingredient>
                  <Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>

                  <Text size={14} color="#666666">
                    {ingredient.name}
                  </Text>
                </S.Ingredient>
              )}
            />
          </S.IngredientsContainer>
        )}
      </S.ModalBody>

      <Footer>
        <S.FooterContent>
          <S.PriceArea>
            <Text color="#666666">Price</Text>

            <Text weight="600" size={18}>
              {formatToLocalePrice(product.price)}
            </Text>
          </S.PriceArea>

          <Button onPress={handleAddItemToCart}>Add to order</Button>
        </S.FooterContent>
      </Footer>
    </Modal>
  );
};
