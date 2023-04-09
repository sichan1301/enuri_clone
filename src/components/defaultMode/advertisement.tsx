import { category } from "../../data/data"
import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import styled from "styled-components"

const Advertisement = () => {
  const {categoryIdx} = useSelector((state:RootState)=>state)
  return(
    <AdUl>
      {category[categoryIdx].ad.map(ad => <><span>{ad.type}</span> <li><a href={ad.link}>{ad.text}</a></li></>)}
    </AdUl>
  )
}

export default Advertisement

const AdUl = styled.ul`
  display: flex;
  align-items:center;
  flex-wrap: wrap;
  li{
    font-size:14px;
    list-style: none;
    margin:5px 25px;
  }
`