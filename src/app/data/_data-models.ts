export interface iLanguage {
    id:string;
    name:string;
    icon:string;
}
  
export enum eTextTypes {
    navigation = 1

}

export enum eCurrency {
    huf = 1

}

export interface iPrice {
    value:number;
    currency:eCurrency;
}

export interface iPicture {
    path:string;
    type: ePictureType;
}
export enum ePictureType {
    NONE = 0,
    THUMBNAIL,

}



export interface iProduct{
    id:string;
    name:iMultiLangData;
    picture:iPicture;
    description:iMultiLangData;
    tags:string,
    price:string[]    
}

export interface iProductGroup  {        
    category:iMultiLangData;
    columns:string[]
    list:iProduct[]
}



export enum eFoodTypes {
    sandwich = 1,
    coxinha,
}


export interface iMultiLangData{
    hun:string;
    eng:string;
    bra?:string;
    ger?:string;
}
  
export interface iFood extends iProduct {
    type:eFoodTypes
}





export enum eDrinkTypes {
    fizzy = 1,
    juice,
    lemonade,
    wine,
    beer,
    shot,
    coffee
    


}


export interface iDrink extends iProduct {
    type:eDrinkTypes
}

