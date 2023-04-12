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
    <div>
      <div style={{height:"200px"}}>
        <img alt={category.imgSrc[currentImg]} />
      </div>
      <div>{arr.map((item,imgIdx:number) => <Span onMouseEnter = {(e)=>{handleImgMouseEnter(e,imgIdx)}}>{item}</Span>)}</div>
      <EtcUl>
        <li><a href="www.~~.com">여행</a></li>
        <li><a href="www.~~.com">꽃배달</a></li>
        <li><a href="www.~~.com">이사</a></li>
      </EtcUl>
    </div>
  )
}

export default Service

const Span = styled.span`
  display:inline;
  margin-right:5px;
`

const EtcUl = styled.ul`
  display:flex;
  padding:0;
  li{
    display:inline;
    margin:10px;
  }
`
