import { iMultiLangData, iDrink, eDrinkTypes, iPrice, eCurrency, iProductGroup, iPicture, ePictureType, ePictureStyle, iProductInfo, iProductSection, iMultiLangDataMultiLine } from "./_data-models";





export const DRINKS_DATA: iProductSection[] = [

  <iProductSection>{ // Beer
    category: <iMultiLangData>{
      hun: 'Sörök',
      eng: 'Beers',
      bra: '',
      ger: 'Biere',
    },
    picture: <iPicture>{
      enable: true,
      path: 'assets/pictures/drinks/beer2.jpg'
    },
    list: [
      <iProductGroup>{ // Draft beer

        category:
          <iMultiLangData>{
            hun: 'Csapolt Sör',
            eng: 'Draft beer',
            bra: '',
            ger: 'Fassbiere',
          },
        columns: ['name', '0.3L', '0.5L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Pilsner Urquell',
              eng: 'Pilsner Urquell',
              bra: '',
              ger: 'Pilsner Urquell ',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [350, 520]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Dreher Pale Ale',
              eng: 'Dreher Pale Ale',
              bra: 'Dreher Pale Ale',
              ger: 'Dreher Pale Ale',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [280, 490]
          },


        ]
      },

      <iProductGroup>{ // Botled Beer

        category:
          <iMultiLangData>{
            hun: 'Palackozott Sör',
            eng: 'Botled Beer',
            bra: '',
            ger: 'Flaschenbiere',
          },
        columns: ['name', '0.33L', '0.5L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Dreher Classic',
              eng: 'Dreher Classic',
              bra: '',
              ger: 'Dreher Classic',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [390, 490]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Dreher Bak',
              eng: 'Dreher Bak',
              bra: 'Dreher Bak',
              ger: 'Dreher Bak',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [, 510]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'D24 - alkoholmentes',
              eng: 'D24 - alcohol free',
              bra: '',
              ger: 'D24 - alkoholfrei',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [390]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'D24 Citromos - alkoholmentes',
              eng: 'D24 Citrus - alcohol free',
              bra: '',
              ger: 'D24 Citrus - alkoholfrei',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [, 490]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Kozel',
              eng: 'Kozel',
              bra: '',
              ger: 'Kozel',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [, 390]
          },



          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Erdinger Búzasör',
              eng: 'Erdinger Wheat Beer',
              bra: '',
              ger: 'Erdinger Weißbiere',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [, 750]
          },


        ]
      },

      <iProductGroup>{ // Cider

        category:
          <iMultiLangData>{
            hun: 'Cider',
            eng: 'Cider',
            bra: '',
            ger: 'Apfelwein',
          },
        columns: ['name', '0.4L'],

        list: [


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Kingswood Alma Cider',
              eng: 'Kingswood Apple Cider',
              bra: '',
              ger: 'Kingswood Apfelwein',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [590]
          },



        ]
      },

    ]

  },

  <iProductSection>{ // Wine
    category: <iMultiLangData>{
      hun: 'Borok',
      eng: 'Wine',
      bra: '',
      ger: 'Wein',
    },
    picture: <iPicture>{
      enable: true,
      path: 'assets/pictures/drinks/bikaver.png'
    },
    list: [
      <iProductGroup>{ // White Wine

        category:
          <iMultiLangData>{
            hun: 'Fehérbor ',
            eng: 'White Wine',
            bra: '',
            ger: 'Weiβwein',
          },
        columns: ['name', '0.1L', '0.75L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Egri Chardonnay - Ostoros',
              eng: 'Egri Chardonnay - Ostoros',
              bra: '',
              ger: 'Egri Chardonnay - Ostoros',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [270, 2000]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Muskotály - Ostoros',
              eng: 'Muskotály - Ostoros',
              bra: '',
              ger: 'Muskotály - Ostoros',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'félédes',
                eng: 'semi-dry',
                bra: '',
                ger: 'lieblich',
              },
            price: [270, 2000]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Olaszrizling - Gróf Nagyrédei',
              eng: 'Welschriesling - Gróf Nagyrédei',
              bra: '',
              ger: 'Welschriesling - Gróf Nagyrédei',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [210, 1550]
          },



        ]
      },

      <iProductGroup>{ // Rose Wine

        category:
          <iMultiLangData>{
            hun: 'Rozébor ',
            eng: 'Rosé Wine ',
            bra: '',
            ger: 'Roséwein',
          },
        columns: ['name', '0.1L', '0.75L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Csipke Rosé - Ostoros',
              eng: 'Csipke Rosé - Ostoros',
              bra: '',
              ger: 'Csipke Rosé - Ostoros',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [270, 2000]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Gróf Nagyrédei',
              eng: 'Gróf Nagyrédei',
              bra: '',
              ger: 'Gróf Nagyrédei',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [210, 1550]
          },



        ]
      },

      <iProductGroup>{ // Red Wine

        category:
          <iMultiLangData>{
            hun: 'Vörösbor',
            eng: 'Red Wine ',
            bra: '',
            ger: 'Rotwein',
          },
        columns: ['name', '0.1L', '0.75L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Egri Bikavér - Juhász',
              eng: 'Egri Bikavér - Juhász',
              bra: '',
              ger: 'Egri Bikavér - Juhász',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [410, 3075]
          },



          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Egri Kékfrankos - Ostoros',
              eng: 'Egri Kékfrankos - Ostoros',
              bra: '',
              ger: 'Egri Kékfrankos - Ostoros',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [270, 2000]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Merlot - Ostoros',
              eng: 'Merlot - Ostoros',
              bra: '',
              ger: 'Merlot - Ostoros',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'félédes',
                eng: 'semi-dry',
                bra: '',
                ger: 'lieblich',
              },
            price: [270, 2000]
          },


        ]
      },

      <iProductGroup>{ // Perlwine

        category:
          <iMultiLangData>{
            hun: 'Gyöngyözőbor',
            eng: 'Perlwein',
            bra: '',
            ger: 'Perlwein',
          },
        columns: ['name', '0.1L', '0.75L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Juhász Rosé',
              eng: 'Juhász Rosé',
              bra: '',
              ger: 'Juhász Rosé',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [380, 2800]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Juhász Egri Gyöngybor',
              eng: 'Juhász Egri Gyöngybor',
              bra: '',
              ger: 'Juhász Egri Gyöngybor',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [380, 2800]
          },


        ]
      },

      <iProductGroup>{ // Champagne

        category:
          <iMultiLangData>{
            hun: 'Pezsgő',
            eng: 'Champagne',
            bra: '',
            ger: 'Champagne',
          },
        columns: ['name', '0.1L', '0.75L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Hungaria',
              eng: 'Hungaria',
              bra: '',
              ger: 'Hungaria',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'száraz',
                eng: 'dry',
                bra: '',
                ger: 'trockener',
              },
            price: [490, 3700]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Hungaria',
              eng: 'Hungaria',
              bra: '',
              ger: 'Hungaria',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'félédes',
                eng: 'semi-dry',
                bra: '',
                ger: 'lieblich',
              },
            price: [490, 3700]
          },




          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Gancia Prosecco ',
              eng: 'Gancia Prosecco ',
              bra: '',
              ger: 'Gancia Prosecco ',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [750, 5600]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Vueve Cliqout brut',
              eng: 'Vueve Cliqout brut',
              bra: '',
              ger: 'Vueve Cliqout brut',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [5200, 39900]
          },


        ]
      },

    ]
  },


  <iProductSection>{ // Spirit
    category: <iMultiLangData>{
      hun: 'Rövidek',
      eng: 'Spirits',
      bra: '',
      ger: 'Spirits',
    },
    picture: <iPicture>{
      enable: true,
      path: 'assets/pictures/drinks/finlandia.png'
    },
    list: [




      <iProductGroup>{ // Palinka 

        category:
          <iMultiLangData>{
            hun: 'Pálinka',
            eng: 'Fruit Spirit',
            bra: '',
            ger: 'Obstler',
          },
        columns: ['name', '3cl', '5cl'],

        list: [


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Rézangyal',
              eng: 'Rézangyal',
              bra: '',
              ger: 'Rézangyal',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Barrique Szilva (45%)',
                eng: 'Barrique Plum (45%)',
                bra: '',
                ger: 'Barrique Pflaume (45%)',
              },
            price: [480, 800]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Rézangyal',
              eng: 'Rézangyal',
              bra: '',
              ger: 'Rézangyal',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Kajszibarack (40%)',
                eng: 'Apricot (40%)',
                bra: '',
                ger: 'Aprikose (40%)',
              },
            price: [480, 800]
          },



          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Rézangyal',
              eng: 'Rézangyal',
              bra: '',
              ger: 'Rézangyal',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Mézes ágyas meggy (33%)',
                eng: 'Cherry (33%)',
                bra: '',
                ger: 'Kirsche (33%)',
              },
            price: [480, 800]
          },






          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Panyolai',
              eng: 'Panyolai',
              bra: '',
              ger: 'Panyolai',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Szilva (45%)',
                eng: 'Plum (45%)',
                bra: '',
                ger: 'Pflaume (45%)',
              },
            price: [750, 1250]
          },




          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Panyolai',
              eng: 'Panyolai',
              bra: '',
              ger: 'Panyolai',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Kajszibarack (40%)',
                eng: 'Apricot (40%)',
                bra: '',
                ger: 'Aprikose (40%)',
              },
            price: [750, 1250]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Panyolai',
              eng: 'Panyolai',
              bra: '',
              ger: 'Panyolai',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Rubinmeggy (40%)',
                eng: 'Cherry (40%)',
                bra: '',
                ger: 'Kirsche (40%)',
              },
            price: [750, 1250]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Panyolai',
              eng: 'Panyolai',
              bra: '',
              ger: 'Panyolai',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: 'Vilmoskörte (40%)',
                eng: 'Pear (40%)',
                bra: '',
                ger: 'Birne (40%)',
              },
            price: [750, 1250]
          },



        ]
      },


      <iProductGroup>{ // Digestif

        category:
          <iMultiLangData>{
            hun: 'Gyamorkeserű',
            eng: 'Digestif',
            bra: '',
            ger: 'Magnetbitters',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Unicum',
              eng: 'Unicum',
              bra: '',
              ger: 'Unicum',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [390, 650]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Jägermeister',
              eng: 'Jägermeister',
              bra: '',
              ger: 'Jägermeister',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [390, 650]
          },

        ]
      },


      <iProductGroup>{ // Whiskey

        category:
          <iMultiLangData>{
            hun: 'Whiskey',
            eng: 'Whiskey',
            bra: '',
            ger: 'Whiskey',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Tullamore Dew',
              eng: 'Tullamore Dew',
              bra: '',
              ger: 'Tullamore Dew',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [510, 850]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Jim Bean',
              eng: 'Jim Bean',
              bra: '',
              ger: 'Jim Bean',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [330, 550]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Famous Gouse',
              eng: 'Famous Gouse',
              bra: '',
              ger: 'Famous Gouse',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [380, 630]
          },




        ]
      },


      <iProductGroup>{ // Rum

        category:
          <iMultiLangData>{
            hun: 'Rum',
            eng: 'Rum',
            bra: '',
            ger: 'Rum',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Bacardi Blanca',
              eng: 'Bacardi Blanca',
              bra: '',
              ger: 'Bacardi Blanca',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [420, 700]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Ypióca Cachaça',
              eng: 'Ypióca Cachaça',
              bra: '',
              ger: 'Ypióca Cachaça',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [490, 820]
          },


        ]
      },


      <iProductGroup>{ // Tequila

        category:
          <iMultiLangData>{
            hun: 'Tequila',
            eng: 'Tequila',
            bra: '',
            ger: 'Tequila',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'El Jimandor blanca',
              eng: 'El Jimandor blanca',
              bra: '',
              ger: 'El Jimandor blanca',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [420, 700]
          },
          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'El Jimandor reposado',
              eng: 'El Jimandor reposado',
              bra: '',
              ger: 'El Jimandor reposado',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [420, 700]
          },

        ]
      },


      <iProductGroup>{ // Gin

        category:
          <iMultiLangData>{
            hun: 'Gin',
            eng: 'Gin',
            bra: '',
            ger: 'Gin',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Bombay Sapphir',
              eng: 'El Jimandor blanca',
              bra: '',
              ger: 'El Jimandor blanca',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [400, 650]
          },


        ]
      },


      <iProductGroup>{ // Vodka

        category:
          <iMultiLangData>{
            hun: 'Vodka',
            eng: 'Vodka',
            bra: '',
            ger: 'Vodka',
          },
        columns: ['name', '3cl', '5cl'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Finlandia',
              eng: 'Finlandia',
              bra: '',
              ger: 'Finlandia',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [360, 590]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Standard',
              eng: 'Standard',
              bra: '',
              ger: 'Standard',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [490, 820]
          },


        ]
      },


    ]
  },


  <iProductSection>{ // Soft drinks
    category: <iMultiLangData>{
      hun: 'Üdítők',
      eng: 'Soft drinks',
      bra: '',
      ger: 'Softdrinks',
    },
    picture: <iPicture>{
      enable: true,
      path: 'assets/pictures/drinks/coca.jpg'
    },
    list: [




      <iProductGroup>{ // Energy

        category:
          <iMultiLangData>{
            hun: 'Energiaital',
            eng: 'Energy-drink',
            bra: '',
            ger: 'Energiegetränk',
          },
        columns: ['name', '0.25L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Burn',
              eng: 'Burn',
              bra: '',
              ger: 'Burn',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [400]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Hell',
              eng: 'Hell',
              bra: '',
              ger: 'Hell',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [340]
          },

        ]
      },


      <iProductGroup>{ // Soft drink

        category:
          <iMultiLangData>{
            hun: 'Üditőitalok',
            eng: 'Soft Drink',
            bra: '',
            ger: 'Softdrink',
          },
        columns: ['name', '0.25L'],

        list: [


          
          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Coca Cola',
              eng: 'Coca Cola',
              bra: '',
              ger: 'Coca Cola',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Coca Zero',
              eng: 'Coca Zero',
              bra: '',
              ger: 'Coca Zero',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Coca Zero Lemon',
              eng: 'Coca Zero Lemon',
              bra: '',
              ger: 'Coca Zero Lemon',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Fanta Narancs',
              eng: 'Fanta Orange',
              bra: '',
              ger: 'Fanta Orange',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },



          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Fanta Bodza',
              eng: 'Fanta Elder-flower',
              bra: '',
              ger: 'Fanta Holunder',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Sprite Zero',
              eng: 'Sprite Zero',
              bra: '',
              ger: 'Sprite Zero',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },



          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Kinley Tonic',
              eng: 'Kinley Tonic',
              bra: '',
              ger: 'Kinley Tonic',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Kinley Gyömber',
              eng: 'Kinley Ginger',
              bra: '',
              ger: 'Kinley Ingwer',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },

        ]
      },


      <iProductGroup>{ // Juices

        category:
          <iMultiLangData>{
            hun: 'Gyümölcslevek',
            eng: 'Juices',
            bra: '',
            ger: 'Säfte',
          },
        columns: ['name', '0.25L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Cappy - Narancs (100%)',
              eng: 'Cappy - Orange (100%)',
              bra: '',
              ger: 'Cappy - Orange (100%)',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [330]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Cappy - Alma (100%)',
              eng: 'Cappy - Apple (100%)',
              bra: '',
              ger: 'Cappy - Apfel (100%)',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [330]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Cappy - Körte',
              eng: 'Cappy - Pear',
              bra: '',
              ger: 'Cappy - Birne',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [330]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Cappy - ŐszibaracŐszibarack',
              eng: 'Cappy - Peach',
              bra: '',
              ger: 'Cappy - Pfirsich',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [330]
          },



        ]
      },


      <iProductGroup>{ // Ice tea

        category:
          <iMultiLangData>{
            hun: 'Ice Tea',
            eng: 'Ice Tea',
            bra: '',
            ger: 'Ice Tea',
          },
        columns: ['name', '0.25L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Fuzetea - Citrom',
              eng: 'Fuzetea - Lemon',
              bra: '',
              ger: 'Fuzetea - Zitrone',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Fuzetea - Őszibarack',
              eng: 'Fuzetea - Peach',
              bra: '',
              ger: 'Fuzetea - Pfirsich',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [320]
          },



        ]
      },


      <iProductGroup>{ // Limonade

        category:
          <iMultiLangData>{
            hun: 'Limonádé',
            eng: 'Limonade',
            bra: '',
            ger: 'Limonade',
          },
        columns: ['name', '0.4L'],

        list: [

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Gyümölcsös',
              eng: 'Fruit',
              bra: '',
              ger: 'Obst',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: ''
            },
            description:
              <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
              },
            price: [490]
          },



        ]
      },



    ]
  },


  <iProductSection>{ // Cocktails
    category: <iMultiLangData>{
      hun: 'Koktélok',
      eng: 'Cocktails',
      bra: '',
      ger: 'Cocktails',
    },
    picture: <iPicture>{
      enable: true,
      path: 'assets/pictures/drinks/cocktail.jpg'
    },
    list: [



      <iProductGroup>{ // Energy

        category:
          <iMultiLangData>{
            hun: 'Koktélok',
            eng: 'Cocktails',
            bra: '',
            ger: 'Cocktails',
          },
        columns:
         <iMultiLangDataMultiLine>{
          hun: ['name', 'db'],
          eng: ['name', 'pc'],
          bra: [],
          ger: ['name', 'St'],
      },
        
     

        list: [





          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Zizz Málna',
              eng: 'Zizz Raspberry',
              bra: '',
              ger: 'Zizz Himbeeren',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_zizzrasp.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'Finlandia Vodka, Málna, Citrom, Cukor',
                eng: 'Finlandia Vodka, Raspberry, Lemon, Sugar',
                bra: '',
                ger: 'Finlandia Vodka, Himbeeren, Zitrone, Zucker',
              },
            price: [1200]
          },


          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Hugo',
              eng: 'Hugo',
              bra: '',
              ger: 'Hugo',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_hugo.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'Pezsgő (Hungaria száraz), bodzazsirup, menta, zöldcitrom, szódavíz',
                eng: 'Prosecco, Elderflower cordial, fresh mint, lime, club soda',
                bra: '',
                ger: 'Prosecco, Holunderblütensirup, frische Mintzblätter, Limette, Sodawasser',
              },
            price: [1200]
          },

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Zizz Erdei Gyümölcs',
              eng: 'Zizz Forest Fruits',
              bra: '',
              ger: 'Zizz Waldfrüchte',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_zizzwild.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'Finlandia Vodka, Erdei gyümölcsök, Citrom, Cukor',
                eng: 'Finlandia Vodka, Wild berries, Lemon, Sugar',
                bra: '',
                ger: 'Finlandia Vodka, Waldbeeren mix, Zitrone, Zucker',
              },
            price: [1200]
          },







          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Caipirinha',
              eng: 'Caipirinha',
              bra: '',
              ger: 'Caipirinha ',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_caipira.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'Ypióca Cachaça (nádpálinka), zöldcitrom és cukor',
                eng: 'Ypióca Cachaça (Brazillian rum), sugar and lime',
                bra: '',
                ger: 'Ypióca Cachaça (Zuckerrohrsaft-schnaps), Limette und Zucker',
              },
            price: [1350]
          },




          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Margarita',
              eng: 'Margarita',
              bra: '',
              ger: 'Margarita',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_marg.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'El Jimanador Tequila, zöldcitromlé, Cointreau ',
                eng: 'El Jimanador Tequila, lime juice, Cointreau ',
                bra: '',
                ger: 'El Jimanador Tequila, Limettensaft, Cointreau ',
              },
            price: [1350]
          },




          
        

          <iDrink>{
            id: '',
            name: <iMultiLangData>{
              hun: 'Caipirinha Maracuja',
              eng: 'Caipirinha Maracuja',
              bra: '',
              ger: 'Caipirinha Maracuja',
            },
            type: eDrinkTypes.juice,
            picture: <iPicture>{
              path: 'assets/pictures/drinks/c_maracuja.jpg'
            },
            description:
              <iMultiLangData>{
                hun: 'Ypióca Cachaça (nádpálinka), maracuja püré és cukor',
                eng: 'Ypióca Cachaça (Brazillian rum), sugar and passion fruit purée',
                bra: '',
                ger: 'Ypióca Cachaça (Zuckerrohrsaft-schnaps), Maracujapüree und Zucker',
              },
            price: [1450]
          },



        ]
      }
    
    ]
  },
]

