import styled from "styled-components"
import { category } from "../data/data"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Service = () => {
  const {categoryIdx} = useSelector((state:RootState)=>state)

  return (
    <ServiceDiv>
      {category[categoryIdx].imgSrc.map(imgSrc => <img alt = {imgSrc}/>)}
      <EtcUl>
        <li><a href="www.~~.com">여행</a></li>
        <li><a href="www.~~.com">꽃배달</a></li>
        <li><a href="www.~~.com">이사</a></li>
      </EtcUl>
    </ServiceDiv>
  )
}

export default Service

const ServiceDiv = styled.div`
  display:flex;
  flex-direction: column;
  img{
    height:150px;
  }
`
const EtcUl = styled.ul`
  display:flex;
  li{
    margin:10px;
  }
`