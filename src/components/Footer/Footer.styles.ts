import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Footer = styled.View`
  background: #ffffff;
  min-height: ${isAndroid ? '76px' : '110px'};
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView``;
