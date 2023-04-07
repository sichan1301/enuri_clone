export type CategoryType = {
  title:string,
  ad:adType,
  imgSrc:imgType,
  menus:menusType
}


export type adType = textLink[]
export type imgType = string[]

export type textLink={
  text:string,
  link:string
}

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
  sub_subMenu:textLink[]
}[]