
export enum eSreenEventType{
    Layout = 1,
    Breakpoint,
    Resize
}


export interface iScreenData{
    event:eSreenEventType;
    width:number;
    height:number;
    zoom:number;
    isPortrait:boolean;
    isLandscape:boolean;
    isBig:boolean;
    isTiny:boolean;
}

export enum eScrollDirection{
    UP = 1,
    STILL = 2,
    DOWN = 3,

}
export enum eScrollPosition{
    TOP = 1,
    MIDDLE = 2,
    BOTTOM = 3,

}

export interface iScrollData{
    topPos:number;
    bottomPos:number;
    heightFull:number;
    heightView:number;
    topPosPc:number;
    bottomPosPc:number;
    direction: eScrollDirection;
    passedBreakpoint:boolean;
    position: eScrollPosition;
}