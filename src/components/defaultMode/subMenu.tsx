import { category } from "../../data/data"
import { useDispatch, useSelector } from 'react-redux'
import { RootState, updateIdx } from "../../store"

const SubMenu = () => {
  const {categoryIdx,menusIdx,menuIdx} = useSelector((state:RootState)=>state)
  const dispatch = useDispatch()

  const handleSubMenuMouseEnter = (e:React.MouseEvent,subMenuIdx:number) =>{
    dispatch(updateIdx({subMenuIdx:subMenuIdx}))
  }
  
  return(
    <>
      { 
        <ul>
            <h3>{category[categoryIdx].menus[menusIdx].menu[menuIdx].title}</h3>
            {category[categoryIdx].menus[menusIdx].menu[menuIdx].subMenu.map((subMenu,subMenuIdx:number) => <>
              <li onMouseEnter={(e)=>{handleSubMenuMouseEnter(e,subMenuIdx)}}><a href={subMenu.link}>{subMenu.text}</a></li><span>{subMenu.badge}</span>
            </>)}  
        </ul>
      }
    </>
  )
}

export default SubMenu