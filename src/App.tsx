import './App.css';
import { useDispatch } from 'react-redux';
import { updateIdx } from './store';
import { category } from './data/data';
import { useState } from 'react';
import styled from 'styled-components';
import DefaultMode from './components/defaultMode/defaultMode';
import WholeMode from './components/wholeMode/wholeMode';

function App() {
  const [wholeMode,setWholeMode] = useState(false)
  const dispatch = useDispatch()
  const handleClick = () => {
    setWholeMode(!wholeMode)
  }
  const handleMouseEnter = (e:React.MouseEvent,categoryIdx:number) =>{
  dispatch(updateIdx({categoryIdx:categoryIdx}))
  }
  return (
    <AppSection>
      <CategoryDiv>
        <WholeModeHeader onClick = {handleClick}>전체카테고리</WholeModeHeader>
        {category.map((category,categoryIdx:number) => (
          <h1 onMouseEnter = {(e) => {handleMouseEnter(e,categoryIdx)}}>{category.title}</h1>
        ))}
      </CategoryDiv>

      {wholeMode ? <WholeMode /> : <DefaultMode />}

    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  display: flex;
  margin-right:50px;
`

const WholeModeHeader = styled.h1`
  cursor:pointer;
`
const CategoryDiv = styled(AppSection)`
  flex-direction: column;
`