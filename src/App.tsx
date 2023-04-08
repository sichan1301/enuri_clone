import React, { useState } from 'react';
import './App.css';
import { Category } from './data/data';
import styled from 'styled-components';

function App() {
  const [categoryIdx, setCategoryIdx] = useState(0)
  const [menusIdx,setMenusIdx] = useState(0)
  const [menuIdx, setMenuIdx] = useState(0)
  const [subMenuIdx, setSubMenuIdx] = useState(0)

  const handleMenuMouseEnter = (e:React.MouseEvent,menusIdx:number,menuIdx:number) => {
    setMenusIdx(menusIdx)
    setMenuIdx(menuIdx)
  }


  const handleSubMenuMouseEnter = (e:React.MouseEvent,subMenuIdx:number) => {
    setSubMenuIdx(subMenuIdx)
  }

  return (
    <AppSection>

      {Category.map((category,categoryIdx:number) => (<>
        <h1>{category.title}</h1>
        {<ul>
          {category.menus.map( (menus,menusIdx:number) => (<MenuDiv>
            <h3>{menus.title}</h3>
            {menus.menu.map((menu,menuIdx:number) => <li onMouseEnter = {(e)=>{handleMenuMouseEnter(e,menusIdx,menuIdx)}}>{menu.title}</li>)}
          </MenuDiv>))}
        </ul>}</>
      ))}

      {/* {Category[categoryIdx].menus.map((menus,menusIdx:number) => (<MenuDiv>
            <h3>{Category[categoryIdx].menus.}</h3>
            {menus.menu.map((menu,menuIdx:number) => <li onMouseEnter = {(e)=>{handleMenuMouseEnter(e,menusIdx,menuIdx)}}>{menu.title}</li>)}
          </MenuDiv>))}} */}

      <SubMenuUl>
        <h3>{Category[0].menus[menusIdx].menu[menuIdx].title}</h3>
        {Category[0].menus[menusIdx].menu[menuIdx].subMenu.map((subMenu,subMenuIdx:number) => <li onMouseEnter={(e)=>{handleSubMenuMouseEnter(e,subMenuIdx)}}>{subMenu.text}</li>)}
      </SubMenuUl>

      <SubSubMenuUl>
        {Category[0].menus[menusIdx].menu[menuIdx].subMenu[subMenuIdx].sub_subMenu.map(sub_subMenu => <li>{sub_subMenu.text}</li>)}
      </SubSubMenuUl>

      <div>
        {/* <img src ={require('../public/img/cost.jpg')} /> */}
        <EtcUl>
          <li><a href="www.~~.com">여행</a></li>
          <li><a href="www.~~.com">꽃배달</a></li>
          <li><a href="www.~~.com">이사</a></li>
        </EtcUl>
      </div>
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  display: flex;
`

const MenuDiv = styled.section`
  display: flex;
  flex-direction: column;
`

const SubMenuUl = styled.section`

`


const SubSubMenuUl = styled.ul`
  width:300px;
`

const EtcUl = styled.ul`
  display:flex;
  li{
    margin:10px;
  }
`