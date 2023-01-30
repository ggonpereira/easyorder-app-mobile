import React from 'react';
import { Modal, View } from 'react-native';
import { Product } from '../../types/Product';
import { Text } from '../Text';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ProductModal = ({
  visible,
  onClose,
  product,
}: ProductModalProps) => {
  if (!product) return <View />;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Text>Product Modal {product?.name}</Text>
    </Modal>
  );
};
