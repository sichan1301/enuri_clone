import styled from "styled-components"
import Menu from "./menu"
import SubMenu from "./subMenu"
import Sub_SubMenu from "./sub_subMenu"
import Service from "./service"
import Advertisement from "./advertisement"

const DefaultMode = () => {
  return(
    <DefaultModeSection>
      <MenuSection>
        <Menu />
        <SubMenu />
        <Sub_SubMenu />
        <Service />
      </MenuSection>
      <Advertisement />
    </DefaultModeSection>
  )
}

export default DefaultMode

const DefaultModeSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right:50px;
`

const MenuSection = styled.section`
  display: flex;
  margin-right:50px;
`