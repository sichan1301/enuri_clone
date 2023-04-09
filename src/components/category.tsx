import { category } from "../data/data"
import { useDispatch } from 'react-redux'
import { updateIdx } from "../store"
import styled from "styled-components"


const Category = () => {
  const dispatch = useDispatch()
  const handleCategoryMouseEnter = (e:React.MouseEvent,categoryIdx:number) =>{
    dispatch(updateIdx({categoryIdx:categoryIdx}))
  }

  return(
    <CategoryDiv>
      {category.map((category,categoryIdx:number) => (
        <h1 onMouseEnter = {(e) => {handleCategoryMouseEnter(e,categoryIdx)}}>{category.title}</h1>
      ))}
    </CategoryDiv>
  )
}

export default Category

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right:50px;
`