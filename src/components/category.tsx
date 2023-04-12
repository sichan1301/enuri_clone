import { category } from '../data/data';
import { useState } from 'react';
import styled from 'styled-components';
import Menu from './defaultMode/menu';
import WholeMode from './wholeMode/wholeMode';
import Service from './defaultMode/service';
import Advertisement from './defaultMode/advertisement';


const Category = () => {
  const [categoryIdx, setCategoryIdx] = useState(0)
  const [wholeMode,setWholeMode] = useState(false)

  const handleClick = () => {
    setWholeMode(!wholeMode)
  }

  const handleMouseEnter = (e:React.MouseEvent,categoryIdx:number) =>{
    setCategoryIdx(categoryIdx)
  }

  return(
    <CategorySection>
      <CategoryDiv>
        <WholeCategoryText onClick = {handleClick}>전체카테고리</WholeCategoryText>
        {category.map((category,categoryIdx:number) => (<h1 onMouseEnter = {(e) => {handleMouseEnter(e,categoryIdx)}}>{category.title}</h1>))}
      </CategoryDiv>

      {wholeMode ? <WholeMode categoryIdx ={categoryIdx}/> : 
      <DefaultMode>
        <MenuServiceDiv>
          <Menu Category = {category[categoryIdx]}/>
          <Service category ={category[categoryIdx]}/>
        </MenuServiceDiv>
        <Advertisement category ={category[categoryIdx]}/>  
      </DefaultMode>
      }
    </CategorySection>
  )
}

export default Category

const CategorySection = styled.section`
  position:relative;
  display:flex;
`

const WholeCategoryText = styled.h1`
  cursor:pointer;
`
const CategoryDiv = styled.div`
  display:flex;
  flex-direction: column;
`

const DefaultMode = styled(CategoryDiv)`
`

const MenuServiceDiv = styled.div`
  display:flex;
  width: 1000px;
`