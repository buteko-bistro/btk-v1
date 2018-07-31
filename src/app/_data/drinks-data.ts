import {  iMultiLangData, iDrink, eDrinkTypes, iPrice, eCurrency, iProductGroup, iPicture, ePictureType, ePictureStyle, iProductInfo} from "./_data-models";









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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'csapolt',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'csapolt',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[-1,580]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[-1,480],
        info:<iProductInfo>{
          text:<iMultiLangData>{
            hun:'Cappy - Narancs',
            eng:'Cappy - Orange',
            bra:'Cappy - Laranja',
            ger:'Cappy - Orange',
          },
        }

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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'Száraz vörösbor',
          eng:'Száraz vörösbor eng',
          bra:'Száraz vörösbor bra',
          ger:'Száraz vörösbor ger',
        },  
        price:[300,43242, 10000]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'Tokaji édes fehérbor',
          eng:'Tokaji édes fehérbor eng',
          bra:'Tokaji édes fehérbor bra',
          ger:'Tokaji édes fehérbor ger'
 
        },  
        price:[300,2000,-1]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'Málna, Grépfrút, Körte',
          eng:'Málna, Grépfrút, Körte eng',
          bra:'Málna, Grépfrút, Körte bra',
          ger:'Málna, Grépfrút, Körte ger',
        },  
        price:[390,780]
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
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:'',
          eng:'',
          bra:'',
          ger:'',
        },  
        price:[290,580]
      },

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1]
      },

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsumliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1]
      },
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsumliqua. Utsequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1]
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

    columns:['name', '0.33L', '0.5L','0.8L'],

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
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail.jpg'
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,200],
        info:<iProductInfo>{
          text:<iMultiLangData>{
            hun:'Cappy - Narancs',
            eng:'Cappy - Orange',
            bra:'Cappy - Laranja',
            ger:'Cappy - Orange',
          },
        }
      },


      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:''
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1, 100],
      },

     
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail.jpg'
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1,400]
      },



      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
          style:ePictureStyle.redux
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1,3033],
      },

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
          style:ePictureStyle.redux
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsumliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1],
      },
      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Cappy - Narancs',
          eng:'Cappy - Orange',
          bra:'Cappy - Laranja',
          ger:'Cappy - Orange',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          path:'assets/pictures/test_cocktail5.jpg',
          style:ePictureStyle.redux
        },
        description: 
        <iMultiLangData>{
          hun:"Lorem ipsumliqua. Utsequat. ",
          eng:'Cappy Desc eng',
          bra:'Cappy Desc bra',
          ger:'Cappy Desc ger',
        },  
        price:[300,-1]
      },

    ]
  },



  
  <iProductGroup>{ // cocktails
    category: 
      <iMultiLangData>{
        hun:'Koktélok',
        eng:'Cocktails',
        bra:'C',
        ger:'C',
      },
    columns:['name', '2cL', '4cL', '5cL', '6cL', '8cL', '21cL'],

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
        picture:<iPicture>{
          type:ePictureType.THUMBNAIL,
          path:'assets/pictures/test_cocktail.jpg'
        },
        description: 
        <iMultiLangData>{
          hun:'Málna, Grépfrút, Körte',
          eng:'Málna, Grépfrút, Körte eng',
          bra:'Málna, Grépfrút, Körte bra',
          ger:'Málna, Grépfrút, Körte ger',
        },  
        price:[390,780, 232, 213, 232, 213],
      },
      

      <iDrink>{ 
        id:'', 
        name:<iMultiLangData>{
          hun:'Vodka - Finlandia',
          eng:'Vodka - Finlandia',
          bra:'Vodka - Finlandia',
          ger:'Vodka - Finlandia',
        },
        type:eDrinkTypes.juice,
        picture:<iPicture>{
          type:ePictureType.THUMBNAIL,
          path:'assets/pictures/test_cocktail3.png'
        },
        description: 
        <iMultiLangData>{
          hun:'Málna, Grépfrút, Körte',
          eng:'Málna, Grépfrút, Körte eng',
          bra:'Málna, Grépfrút, Körte bra',
          ger:'Málna, Grépfrút, Körte ger',
        },  
        price:[390,780, 232, 219, 232, 213],
        info:<iProductInfo>{
          text:<iMultiLangData>{
            hun:'Cappy - Narancs',
            eng:'Cappy - Orange',
            bra:'Cappy - Laranja',
            ger:'Cappy - Orange',
          },
        }
      },
     
    ]
  },


];
