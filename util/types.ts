export type itemSideBar = {
    name:string , 
    icon:string , 
    path:string
}

export enum IMPACT {
    HEIGHT,
    MID ,
    LOW
}

export type stakeHolderType = {
    name:string , 
    email :string , 
    phone:number ,
    impact : IMPACT,
    description : string
}
