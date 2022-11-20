import * as S from './Main.styles';
import { Header } from '../components/Header';

export const Main = () => {
  return (
    <>
      <S.Container>
        <Header />

        <S.CategoriesContainer></S.CategoriesContainer>

        <S.MenuContainer></S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer></S.FooterContainer>
      </S.Footer>
    </>
  );
};
