import styled from 'styled-components/native';

export const Item = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Product = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  border-radius: 6px;
  height: 40px;
  width: 48px;
`;

export const Quantity = styled.View``;

export const ProductInformation = styled.View``;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Summary = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalContainer = styled.View`
  flex: 1;
  margin-right: 12px;
`;
