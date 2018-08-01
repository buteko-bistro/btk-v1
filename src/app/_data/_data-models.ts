import { isType } from "../../../node_modules/@angular/core/src/type";

export interface iLanguage {
    id: string;
    name: string;
    icon: string;
}

export enum eTextTypes {
    navigation = 1

}

export enum eCurrency {
    huf = 1

}

export interface iPrice {
    value: number;
    currency: eCurrency;
}

export enum ePictureStyle {
    normal = 1,
    redux = 2,
}

export interface iPicture {
    path: string;
    disable: boolean;
    style: ePictureStyle;
    type: ePictureType;

}
export enum ePictureType {
    NONE = 0,
    THUMBNAIL,

}

export interface iProductInfo {
    text: iMultiLangData;
}



export interface iProduct {
    id: string;
    name: iMultiLangData;
    picture: iPicture;
    description: iMultiLangData;
    tags: string,
    price: number[],
    info: iProductInfo,
}

export interface iProductGroup {
    category: iMultiLangData;
    columns: string[]
    list: iProduct[]
    description?: iMultiLangData;
}

export enum eTableType {
    default = 1,
}

export enum eFoodTypes {
    sandwich = 1,
    coxinha,
}


export interface iMultiLangData {
    hun: string;
    eng: string;
    bra?: string;
    ger?: string;
}

export interface iFood extends iProduct {
    type: eFoodTypes
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

export interface iFood extends iProduct {
}

export interface iDrink extends iProduct {
    type: eDrinkTypes
}



export interface iConfig {
    breakpointBig: number;
    breakpointTiny: number;


}


export class Card {


    private _state: "front" | "back-picture" | "back-info" = "front";


    public title = 'title';
    public info = 'info';
    public description = 'description';
    public titleToShow = 'text';
    public textToShow = 'text';
    public textToFrame = 'text';

    constructor(
        private _id: string,
        private _data: iProduct,
        private _validPrices: number = 0,
        private _icons: string[] = ['info', 'photo_camera']

    ) {
        this._id = "myCard-" + this._id;
        this.switchLanguage('hun')

        // console.log("               ... ", this._data, this._validPrices);

        // setTimeout(() => {
        //     this._validPrices = this._data.price.filter((p)=>{p>-1}).length;
        //     console.log("               . ", this._data.id, this._validPrices);
        // }, 100);

    }


    get data(): iProduct { return this._data }
    get state() { return this._state }
    get id(): string { return this._id }
    get validPrices(): number { return this._validPrices }
    get icons(): string[] { return this._icons }

    public flipPicture(): boolean {

        let ret = false
        if (this._state != "front" && this._state != "back-picture") {
            this._state = "front";
            ret = true;
        } else {
            this._state = this._state == "front" ? "back-picture" : "front";
        }

        this.switchTextToShow(this._state);



        return ret;

    }

    public flipInfo(): boolean {
        // this.switchTextToShow(this._state);

        // this.switchTextToShow(this._state);
        let ret = false
        if (this._state != "front" && this._state != "back-info") {
            this._state = "front";
            ret = true;
        } else {
            this._state = this._state == "front" ? "back-info" : "front";

        }

        this.switchTextToShow(this._state);



        return ret;
    }

    switchLanguage(lan: string) {
        this.title = '';
        this.info = '';
        this.description = '';

        if (this._data) if (this._data.name) if (this._data.name[lan])
            this.title = this._data.name[lan];

        if (this._data) if (this._data.info) if (this._data.info.text) if (this._data.info.text[lan])
            this.info = this._data.info.text[lan];



        if (this._data) if (this._data.description) if (this._data.description[lan])
            this.description = this._data.description[lan];



        this.switchTextToShow(this._state, 0);

    }


    switchTextToShow(state: string, delay: number = 430) {
        setTimeout(() => {

            if (this._state == 'back-info')
                this.textToShow = this.info;
            else
                this.textToShow = this.description;

            let compensator =  "blalalla lalallalal lalalalla lalal alalla bala "

            this.textToFrame = this.info.length > (compensator.length + this.description.length) ? this.info : this.description;
            
            this.titleToShow = (this._state == 'front') ? this.title : '';

        }, delay);
    }



    public reset(): void {

        this._state = "front";
        this.switchTextToShow(this._state);

    }


    resetTinyOp() {
        if (this._state == 'back-picture')
            this.reset();
    }


    public subscribeFlip() {
        // card = document.querySelector('.card');
        // card.addEventListener( 'click', function() {
        // card.classList.toggle('is-flipped');
        // });
    }


}

export class CardDeck {

    private _allCards: Card[] = [];
    private _visibleCards: Card[] = [];


    get id(): string { return this._id }
    get allCards(): Card[] { return this._allCards }
    get visibleCards(): Card[] { return this._visibleCards }
    get columns(): string[] { return this._columns }






    constructor(private _id: string, private _columns: string[]) {
    }

    resetVisibleCards(except?: Card, isTiny?: boolean) {
        console.log("RESET vc")
        this._visibleCards.forEach(card => {
            if (except !== card) {
                if (isTiny == true) {
                    if (card.state == 'back-picture')
                        card.reset();

                }
                else {
                    card.reset();
                }

            }

        });
    }

    pushCard(id: string | number, data: iProduct, icons: string[]) {
        let val = data.price.filter(p => p > -1).length;
        this._allCards.push(new Card(this.id + id, data, val, icons));
    }

    popCard() {
        this._allCards.pop();
    }

    addToVisible(amount: number = 5): Card[] {
        // this._visibleCards.
        let max = this._allCards.length

        let start = this._visibleCards.length;
        let end = (start + amount > max) ? max : start + amount;

        let newlyAdded: Card[] = []
        for (let i = start; i < end; i++) {

            let val = this._allCards[i].data.price.filter(p => p > -1).length;
            console.log("        - ", this._allCards[i].id, this._allCards[i].data.price, val)
            this._visibleCards.push(this._allCards[i]);
            newlyAdded.push(this._allCards[i]);
        }

        return newlyAdded;


    }

    switchLanguage(lan: string) {
        this._allCards.forEach(card => {
            card.switchLanguage(lan);
        });
    }


}