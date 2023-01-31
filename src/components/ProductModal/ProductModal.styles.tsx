import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  height: 200px;
  object-fit: cover;
  position: relative;
  width: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  height: 32px;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 32px;
`;

export const ModalBody = styled.View`
  background-color: #fafafa;
  flex: 1;
  padding: 32px 24px 0px 24px;
`;

export const Header = styled.View`
  margin-bottom: 32px;
`;

export const IngredientsContainer = styled.View`
  flex: 1;
`;

export const Ingredient = styled.View`
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  flex-direction: row;
  margin-bottom: 4px;
  padding: 16px;
`;

export const FooterContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceArea = styled.View``;
