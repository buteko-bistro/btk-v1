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

export enum ePictureStyle{
    normal = 1,
    redux = 2,
}

export interface iPicture {
    path:string;
    style:ePictureStyle;
    type: ePictureType;

}
export enum ePictureType {
    NONE = 0,
    THUMBNAIL,

}

export interface iProductInfo {
    text:iMultiLangData;
}



export interface iProduct{
    id:string;
    name:iMultiLangData;
    picture:iPicture;
    description:iMultiLangData;
    tags:string,
    price:number[],   
    info: iProductInfo,
}

export interface iProductGroup  {        
    category:iMultiLangData;
    columns:string[]
    list:iProduct[]
}

export enum eTableType {
    default = 1,
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



export interface iConfig{
    breakpointBig:number;   
    breakpointTiny:number;   


}


export class Card{
    

    private _state: "front"|"back" = "front";


    

    constructor(
        private _id:string,
        private _data:iProduct, 
        private _validPrices:number = 0

    ){
        this._id = "myCard-"+this._id;
        // console.log("               ... ", this._data, this._validPrices);

        // setTimeout(() => {
        //     this._validPrices = this._data.price.filter((p)=>{p>-1}).length;
        //     console.log("               . ", this._data.id, this._validPrices);
        // }, 100);

    }


    get data():iProduct{return this._data}
    get state(){return this._state}
    get id():string{return this._id}
    get validPrices():number{return this._validPrices}


    public flip():void{
        this._state = this._state == "front" ? "back" : "front";
    }


    public reset():void{
        this._state = "front";
    }


    public subscribeFlip(){
        // card = document.querySelector('.card');
        // card.addEventListener( 'click', function() {
        // card.classList.toggle('is-flipped');
        // });
    }


}

export class CardDeck{

    private _allCards:Card[] = [];
    private _visibleCards:Card[] = [];
    
    get id():string {return this._id}
    get allCards():Card[] {return this._allCards}
    get visibleCards():Card[] {return this._visibleCards}
    get columns():string[] {return this._columns}






    constructor(private _id:string, private _columns:string[]){

    }

    resetVisibleCards(except?:Card){
        console.log("RESET vc")
        this._visibleCards.forEach(card => {
            // if(card.state == 'back' && card !== except){
                card.reset();
            // }
        });
    }

    pushCard(id:string|number, data:iProduct){
        let val = data.price.filter(p=>p>-1).length;
        this._allCards.push(new Card(this.id+id, data, val));  
    }
  
    popCard(){
        this._allCards.pop();  
    }

    addToVisible(amount:number = 5):Card[]{
        // this._visibleCards.
        let max = this._allCards.length

        let start = this._visibleCards.length;
        let end = (start + amount > max) ? max : start + amount;
    
        let newlyAdded:Card[] = []
        for(let i=start; i<end; i++){

            let val = this._allCards[i].data.price.filter(p=>p>-1).length;
            console.log("        - ", this._allCards[i].id, this._allCards[i].data.price, val)
            this._visibleCards.push(this._allCards[i]);
            newlyAdded.push(this._allCards[i]);
        }

        return newlyAdded;

        
    }


}