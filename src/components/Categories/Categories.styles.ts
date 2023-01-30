import styled from 'styled-components/native';
import { Text as TextPrimitive } from '../Text';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Category = styled.TouchableOpacity`
  align-items: center;
  width: 79px;
`;

export const Icon = styled.View`
  align-items: center;
  background: #ffffff;
  border-radius: 75px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 3;
  height: 44px;
  justify-content: center;
  width: 44px;
`;

export const Text = styled(TextPrimitive)`
  margin-top: 8px;
  text-align: center;
`;
