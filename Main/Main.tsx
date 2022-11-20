import * as S from './Main.styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';

export const Main = () => {
  return (
    <>
      <S.Container>
        <Header />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer></S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer></S.FooterContainer>
      </S.Footer>
    </>
  );
};
