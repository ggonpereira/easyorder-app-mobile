import { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import * as S from './TableModal.styles';

const isAndroid = Platform.OS === 'android';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const [table, setTable] = useState('');

  const handleSave = () => {
    onSave(table);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <S.Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.ModalHeader>
            <Text weight="600">Inform the table</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666666" />
            </TouchableOpacity>
          </S.ModalHeader>

          <S.ModalForm>
            <S.Input
              placeholder="Table number"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Save
            </Button>
          </S.ModalForm>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
};
