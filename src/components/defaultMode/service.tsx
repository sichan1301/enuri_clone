import styled from "styled-components"
import { category } from "../../data/data"
import { useDispatch, useSelector } from "react-redux"
import { RootState, updateIdx } from "../../store"

const Service = () => {
  const {categoryIdx,imgIdx} = useSelector((state:RootState)=>state)
  const arr = new Array(category[categoryIdx].imgSrc.length).fill("○");

  const dispatch = useDispatch()

  const handleImgMouseEnter = (e:React.MouseEvent,imgIdx:number) =>{
    dispatch(updateIdx({
      imgIdx:imgIdx
    }))
  }
  return (
    <ServiceDiv>
      <img alt={category[categoryIdx].imgSrc[imgIdx]} />
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
