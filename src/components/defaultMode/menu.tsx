import styled from "styled-components"
import { CategoryType } from "../../data/dataType"
import SubMenu from "./subMenu"
import { useEffect, useState } from "react"

interface MenuProps {
  Category:CategoryType
}

const Menu = ({Category}:MenuProps) => {
  const [menusIdx,setMenusIdx] = useState(0)
  const [menuIdx,setMenuIdx] = useState(0)

  const handleMouseEnter = (e:React.MouseEvent,menusIdx:number, menuIdx:number) => {
    setMenusIdx(menusIdx)
    setMenuIdx(menuIdx)
  }
  
  return(
    <MenuArticle>
      {
        Category.menus.map((menus,menusIdx:number) => (
          <>
            <h3>{menus.title}</h3>
            {menus.menu.map((menu,menuIdx:number) => 
              <MenuDiv>
                <li onMouseEnter={(e)=>{handleMouseEnter(e,menusIdx,menuIdx)}}>{menu.title}</li>
              </MenuDiv>
            )}
          </>
        ))
      }
    {Category.menus[menusIdx].menu[menuIdx] && <SubMenu Menu = {Category.menus[menusIdx].menu[menuIdx]}/>}
    </MenuArticle>
  )
}

export default Menu

const MenuArticle = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
`
const MenuDiv = styled.div`
  display:flex;
  flex-direction:column;
`