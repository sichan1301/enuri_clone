import styled from "styled-components"
import { subMenuType } from "../../data/dataType"

interface SubSubMenuProps {
  SubMenu:subMenuType
}

const Sub_SubMenu = ({SubMenu}:SubSubMenuProps) => {
  return(
    <SubSubMenuUl>
      {SubMenu.sub_subMenu.map(sub_subMenu =>  
        <SubSubMenuLi>
          <li><a href={sub_subMenu.link}>{sub_subMenu.text}</a></li><span>{sub_subMenu.badge}</span>
        </SubSubMenuLi>)}
    </SubSubMenuUl>
  )
}

export default Sub_SubMenu

const SubSubMenuUl = styled.ul`
  width: 250px;
`

const SubSubMenuLi = styled.li`
  display:flex;
`