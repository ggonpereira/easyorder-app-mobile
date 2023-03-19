import React from 'react';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { OrderConfirmedModalProps } from './interfaces';
import * as S from './OrderConfirmedModal.styles';

export const OrderConfirmedModal = ({
  visible,
  onOkButtonClick,
}: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <S.Container>
        <CheckCircle />
        <Text
          size={18}
          weight="600"
          color="#ffffff"
          style={{ marginBottom: 6, marginTop: 9 }}
        >
          Order confirmed
        </Text>
        <Text
          color="#ffffff"
          style={{
            maxWidth: 195,
            textAlign: 'center',
            lineHeight: 24,
          }}
          opacity={0.9}
        >
          Follow the production status at home
        </Text>

        <S.OkButton onPress={onOkButtonClick}>
          <Text color="#2066fc" weight="600">
            OK
          </Text>
        </S.OkButton>
      </S.Container>
    </Modal>
  );
};
