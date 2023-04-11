import { category } from "../../data/data"
import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import styled from "styled-components"
import { useEffect } from "react"
import { menuType } from "../../data/dataType"

const WholeMode = () => {
  const {categoryIdx} = useSelector((state:RootState) => state)
  // const filteredMenu = (category[categoryIdx].menus[0].menu).concat(category[categoryIdx].menus[1].menu).concat(category[categoryIdx].menus[2].menu).filter((item,idx:number)=> idx<12 )

  let filteredArray:menuType[] = []
  let menusInitial = 0

  for(let i =0 ; i< category[categoryIdx].menus.length;i++){
    filteredArray = [...filteredArray, ...category[categoryIdx].menus[menusInitial].menu];
    menusInitial += 1;
  }

  filteredArray = filteredArray.slice(0,12)

  useEffect(()=>{
    console.log(filteredArray);
  },[])

  return(
    <WholeModeSection>
      {filteredArray.map(item => (<MenuDiv><h2>{item.title}</h2>
        <ul>
          {item.subMenu.map((item,idx:number) => (idx !== 0 && idx<10) && <li><a href={item.link}>{item.text}</a></li>)} <br />
          {item.subMenu.length > 10 && < a href={item.subMenu[0].link}>더보기</a>}
        </ul>
        </MenuDiv> 
      ))}
    </WholeModeSection>
  )
}

export default WholeMode


const WholeModeSection = styled.section`
  display:flex;
  flex-wrap:wrap;
`
const MenuDiv = styled.div`
  display:flex;
  flex-direction:column;
  width:15%;
`
