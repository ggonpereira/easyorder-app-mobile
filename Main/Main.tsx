import * as S from './Main.styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';

export const Main = () => {
  const handleButtonPress = () => {
    alert('Button was clicked!');
  };

  return (
    <>
      <S.Container>
        <Header />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          <Button onPress={handleButtonPress} disabled>
            New Order
          </Button>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
};
