import React from 'react';
import * as S from './Footer.styles';
import { FooterProps } from './interfaces';

export const Footer = ({ children }: FooterProps) => {
  return (
    <S.Footer>
      <S.FooterContainer>{children}</S.FooterContainer>
    </S.Footer>
  );
};
