export type CategoryType = {
  title:string,
  ad:adType,
  imgSrc:imgType,
  menus:menusType
}

export type adType = {
  text:string,
  link:string,
  type:"가이드" | "뉴스" |"기획전"
}[]

export type imgType = string[]

export type textLink={
  text:string,
  link:string,
  badge:badgeType
}
export type badgeType = "N" | "H" | ""

export type menusType = {
  title:string,
  menu:menuType
}[]

export type menuType = {
  title:string,
  subMenu:subMenuType
}[]

export type subMenuType = {
  text:string,
  link:string,
  badge:badgeType,
  sub_subMenu:textLink[]
}[]