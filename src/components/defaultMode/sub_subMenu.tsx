import { category } from "../../data/data"
import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import styled from "styled-components"

const Sub_SubMenu = () => {
  const {categoryIdx,menusIdx,menuIdx,subMenuIdx} = useSelector((state:RootState)=>state)

  return(
    <SubSubMenuUl>
      { 
        category[categoryIdx].menus[menusIdx].menu[menuIdx].subMenu[subMenuIdx].sub_subMenu.map(sub_subMenu =>  <>
          <li><a href={sub_subMenu.link}>{sub_subMenu.text}</a></li><span>{sub_subMenu.badge}</span>
        </>)}
    </SubSubMenuUl>
  )
}

export default Sub_SubMenu

const SubSubMenuUl = styled.ul`
  width:200px;
`