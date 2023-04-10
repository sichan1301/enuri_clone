import { useDispatch, useSelector } from 'react-redux'
import { category } from '../data/data';
import styled from 'styled-components';
import { RootState, updateIdx, updateMode } from '../store';


const Category = () => {
  const dispatch = useDispatch()
  const wholeMode = useSelector((state:RootState) => state.wholeMode)

  const handleClick = () => {
    dispatch(updateMode(!wholeMode))
  }

  const handleMouseEnter = (e:React.MouseEvent,categoryIdx:number) =>{
  dispatch(updateIdx({categoryIdx:categoryIdx}))
  }

  return(
    <CategoryDiv>
      <WholeCategoryText onClick = {handleClick}>전체카테고리</WholeCategoryText>
      {category.map((category,categoryIdx:number) => (
        <h1 onMouseEnter = {(e) => {handleMouseEnter(e,categoryIdx)}}>{category.title}</h1>
      ))}
    </CategoryDiv>
  )
}

export default Category

const WholeCategoryText = styled.h1`
  cursor:pointer;
`

const CategoryDiv = styled.div`
  display:flex;
  flex-direction: column;
  margin-right:50px;
`