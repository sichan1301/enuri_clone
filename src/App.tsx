import './App.css';
import styled from 'styled-components';
import Category from './components/category';
import Menu from './components/menu';
import SubMenu from './components/subMenu';
import Sub_SubMenu from './components/sub_subMenu';
import Advertisement from './components/advertisement';
import Service from './components/service';

function App() {
  return (
    <AppSection>
      <Category />
      <Section>
        <MenuSection>
          <Menu />
          <SubMenu />
          <Sub_SubMenu />
          <Service />
        </MenuSection>
        <Advertisement />
      </Section>
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  display: flex;
  margin-right:50px;
`
const MenuSection = styled(AppSection)`
`
const Section = styled(AppSection)`
  flex-direction: column;
`
