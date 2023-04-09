import { category } from "../data/data"
import { useDispatch, useSelector } from 'react-redux'
import { RootState, updateIdx } from "../store"
import styled from "styled-components"

const Menu = () => {
  const categoryIdx = useSelector((state:RootState)=>state.categoryIdx)
  const dispatch = useDispatch()

  const handleMenuMouseEnter = (e:React.MouseEvent,menusIdx:number,menuIdx:number) =>{
    dispatch(updateIdx({
      menusIdx:menusIdx,
      menuIdx:menuIdx
    }))
  }
  
  return(
    <MenuDiv>
      {category[categoryIdx].menus.map((menus,menusIdx:number) => (<>
        <h3>{menus.title}</h3>
        {menus.menu.map((menu,menuIdx:number) => <li onMouseEnter = {(e)=>{handleMenuMouseEnter(e,menusIdx,menuIdx)}}>{menu.title}</li>)}
      </>))}
    </MenuDiv>
  )
}

export default Menu

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right:50px;
`