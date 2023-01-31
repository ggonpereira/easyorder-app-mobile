import React from 'react';
import * as S from './Footer.styles';

interface FooterProps {
  children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <S.Footer>
      <S.FooterContainer>{children}</S.FooterContainer>
    </S.Footer>
  );
};
