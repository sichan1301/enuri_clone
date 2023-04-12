import './App.css';
import styled from 'styled-components';
import Category from './components/category';

function App() {
  return (
    <AppSection>
      <Category />
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  display: flex;
  margin-right:50px;
`