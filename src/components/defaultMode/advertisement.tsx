import styled from "styled-components"
import { CategoryType } from "../../data/dataType"

interface AdvertisementProps {
  category:CategoryType
}
const Advertisement = ({category}:AdvertisementProps) => {

  return(
    <AdUl>
      {category.ad.map(ad => <>
       <li><a href={ad.link}>{ad.type}</a></li>
      </>)}
    </AdUl>
  )
}

export default Advertisement

const AdUl = styled.ul`
  /* display: flex; */
  /* align-items:center; */
  /* flex-wrap: wrap; */
  li{
    font-size:14px;
    list-style: none;
    margin:5px 25px;
    display:inline;
  }
`