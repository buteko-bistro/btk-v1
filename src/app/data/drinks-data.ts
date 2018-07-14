import {  iMultiLangData, iDrink, eDrinkTypes, iPrice, eCurrency, iProductGroup} from "./_data-models";









export const DRINKS_DATA:iProductGroup[]  = [
  
  
  

  <iProductGroup>{ // beer
    category: 
      <iMultiLangData>{
        hun:'Sörök',
        eng:'Beers',
        bra:'Cervejas',
        ger:'Biere',
      },
    columns:['name', '0.3L', '0.5L'],
    
    list:[

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Dreher',
          eng:'Dreher - eng',
          bra:'Dreher - bra',
          ger:'Dreher - ger ',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'csapolt',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['390','780'],
      },
    
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Dreher - csapolt',
          eng:'Dreher - eng',
          bra:'Dreher - bra',
          ger:'Dreher - ger ',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['390','780'],
      },
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Dreher',
          eng:'Dreher - eng',
          bra:'Dreher - bra',
          ger:'Dreher - ger ',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'csapolt',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['390','780'],
      },
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Dreher',
          eng:'Dreher - eng',
          bra:'Dreher - bra',
          ger:'Dreher - ger ',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['390','780'],
      },

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Arany ászok',
          eng:'Arany ászok',
          bra:'Arany ászok',
          ger:'Arany ászok',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['390','780'],
      },
     
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Hieneken',
          eng:'Hieneken',
          bra:'Hieneken',
          ger:'Hieneken',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['-','580'],
      },
           
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Borsodi',
          eng:'Borsodi',
          bra:'Borsodi',
          ger:'Borsodi',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['-','480'],
      },

    ]
  },

  <iProductGroup>{ // wine
    category: 
      <iMultiLangData>{
        hun:'Borok',
        eng:'Wines',
        bra:'Vinhos',
        ger:'Weine',
      },
    columns:['name', '0.1L','0.5L', '0.75L'],

    list:[

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Egri Bikavér 2015 – Juhász Testvérek Pincészete',
          eng:'Egri Bikavér 2015',
          bra:'Egri Bikavér 2015',
          ger:'Egri Bikavér 2015',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'Száraz vörösbor',
          eng:'Száraz vörösbor eng',
          bra:'Száraz vörösbor bra',
          ger:'Száraz vörösbor ger',
        },  
        price:['300','-', '10000'],
      },


      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Szamorodni 2009 – Szepsy Pincészet',
          eng:'Egri Bikavér 2015',
          bra:'Egri Bikavér 2015',
          ger:'Egri Bikavér 2015',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'Tokaji édes fehérbor',
          eng:'Tokaji édes fehérbor eng',
          bra:'Tokaji édes fehérbor bra',
          ger:'Tokaji édes fehérbor ger'
 
        },  
        price:['300','2000','-'],
      },
    ]
  },

  <iProductGroup>{ // shots
    category: 
      <iMultiLangData>{
        hun:'Rövidek',
        eng:'Shots',
        bra:'Doses',
        ger:'Spirituose',
      },
    columns:['name', '2cL', '4cL'],

    list:[

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Vodka - Finlandia',
          eng:'Vodka - Finlandia',
          bra:'Vodka - Finlandia',
          ger:'Vodka - Finlandia',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'Málna, Grépfrút, Körte',
          eng:'Málna, Grépfrút, Körte eng',
          bra:'Málna, Grépfrút, Körte bra',
          ger:'Málna, Grépfrút, Körte ger',
        },  
        price:['390','780'],
      },
      
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Vodka - Kalinka',
          eng:'Vodka - Kalinka',
          bra:'Vodka - Kalinka',
          ger:'Vodka - Kalinka',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:['290','580'],
      },
      
     
    ]
  },

  <iProductGroup>{
    category: 
      <iMultiLangData>{
        hun:'Alkohol mentes',
        eng:'Alcohool-free',
        bra:'Sem álcool',
        ger:'Alkoholfrei',
      },

    columns:['name', '0.33L', '0.5L'],

    list:[
     
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:'',
        description: 
        <iMultiLangData>{
          hun:"Cappy Desc hun ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:['300','-'],
      },


    ]
  },


];
