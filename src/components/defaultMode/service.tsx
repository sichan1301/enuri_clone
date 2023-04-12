import styled from "styled-components"
import { useState } from "react"
import { CategoryType } from "../../data/dataType"

interface ServiceProps {
  category:CategoryType
}

const Service = ({category}:ServiceProps) => {
  const [currentImg, setCurrentImg] = useState(0)
  const arr = new Array(category.imgSrc.length).fill("○");

  const handleImgMouseEnter = (e:React.MouseEvent,imgIdx:number) =>{
    setCurrentImg(imgIdx)
  }
  
  return (
    <ServiceDiv>
      <img alt={category.imgSrc[currentImg]} />
      <ImgSelect>{arr.map((item,imgIdx:number) => <span onMouseEnter = {(e)=>{handleImgMouseEnter(e,imgIdx)}}>{item}</span>)}</ImgSelect>
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
  width: 250px;
  display:flex;
  flex-direction: column;
  img{
    height:150px;
  }
`

const ImgSelect = styled.div`
  display:flex;
  span{
    margin-right:5px;
  }
`

const EtcUl = styled.ul`
  display:flex;
  li{
    margin:10px;
  }
`
