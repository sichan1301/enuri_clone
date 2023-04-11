import { menuType } from "../../data/dataType"
import Sub_SubMenu from "./sub_subMenu"
import styled from "styled-components"
import { useState } from "react"

interface SubMenuProps {
  Menu:menuType
}

const SubMenu = ({Menu}:SubMenuProps) => {
  const [subMenuIdx, setSubMenuIdx] = useState(0)

  const handleMouseEnter = (e:React.MouseEvent,subMenuIdx:number) => {
    setSubMenuIdx(subMenuIdx)
  }

  return(
    <SubMenuArticle>
      {
        <>
          <h3>{Menu.title}</h3>
          {Menu.subMenu.map((subMenu,subMenuIdx:number) => 
            <SubMenuLi>
              <li onMouseEnter={(e)=>{handleMouseEnter(e,subMenuIdx)}}><a href={subMenu.link}>{subMenu.text}</a></li><span>{subMenu.badge}</span>
            </SubMenuLi>)}  
        </>
      }
      {Menu.subMenu[subMenuIdx] && <Sub_SubMenu SubMenu = {Menu.subMenu[subMenuIdx]}/>}

    </SubMenuArticle>
  )

}

export default SubMenu

const SubMenuArticle = styled.article`
  position:absolute;
  right:-200%;
  top:0;  
`
const SubMenuLi = styled.li`
  display:flex;
  li{
    margin-right:5px;
  }
`