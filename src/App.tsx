import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import styled from 'styled-components';
import DefaultMode from './components/defaultMode/defaultMode';
import WholeMode from './components/wholeMode/wholeMode';
import Category from './components/category';

function App() {
  const wholeMode = useSelector((state:RootState) => state.wholeMode)

  return (
    <AppSection>
      <Category />
      {wholeMode ? <WholeMode /> : <DefaultMode />}
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  display: flex;
  margin-right:50px;
`