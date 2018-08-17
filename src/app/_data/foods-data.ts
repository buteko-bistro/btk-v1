import { iProductGroup, iMultiLangData, iDrink, eDrinkTypes, iPicture, iProductInfo, ePictureStyle, ePictureType, iFood, iMultiLangDataMultiLine } from "./_data-models";



export const FOODS_DATA: iProductGroup[] = [




    <iProductGroup>{
        category:
            <iMultiLangData>{
                hun: 'Ételek',
                eng: 'Foods',
                bra: '',
                ger: 'Essen',
            },

        columns:  <iMultiLangDataMultiLine>{
            hun: ['name', '/db'],
            eng: ['name', '/pc'],
            bra: [],
            ger: ['name', '/St'],
        },

        description: 
            <iMultiLangData>{
                hun: '',
                eng: '',
                bra: '',
                ger: '',
            },  

        list: [



            <iFood>{
                id: '',
                 name:  <iMultiLangData>{
                    hun: 'Coxinha',
                    eng: 'Coxinha',
                    bra: 'Coxinha',
                    ger: 'Coxinha',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/coxinha_14.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Csirkés-pulykás', 'Juhtúrós-tarjás','Sajtos-sonkás', 'Gombás-póréhagymás'],
                        eng: ['Chicken and Turkey', 'Sheep cottage chese with pork shoulder', 'Ham and cheese', 'Mushroom and leek'],
                        bra: [''],
                        ger: [ 'Hänchen und Pute', 'Schafskäse mit magerem Scweinekamm','Schinken und Käse', 'Pilz und Lauch'],
                    },
                price: [59],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },


            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Cubano',
                    eng: 'Cubano',
                    bra: 'Cubano',
                    ger: 'Cubano',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/cubano1.JPG'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Pácolt disznóhús, főtt sonka, sajt, mustár, csemege uborka'],
                        eng: ['Marinated pork, cooked ham, cheese, mustard, pickles'],
                        bra: [''],
                        ger: [ 'Mariniertes mageres Sweinefleisch, Kochschinken, Käse, Senf, Gurken'],
                    },
                price: [1390],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },


            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Marguerita',
                    eng: 'Marguerita',
                    bra: 'Marguerita',
                    ger: 'Marguerita',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/marguerita1.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Mozzarella, paradicsom, bazsalikom'],
                        eng: ['Mozzarella, tomato, basil'],
                        bra: [''],
                        ger: [ 'Mozzarella, Tomate, Basilikum'],
                    },
                price: [790],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },


            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Marguerita da Casa',
                    eng: 'Marguerita da Casa',
                    bra: 'Marguerita da Casa',
                    ger: 'Marguerita da Casa',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/marguerita1.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Mozzarella, bazsalikom, paradicsom konfit '],
                        eng: ['Mozzarella, basil, tomato confit'],
                        bra: [''],
                        ger: [ 'Mozzarella, Basilikum, Tomatenkonfit'],
                    },
                price: [990],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },

            
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Carne Louca',
                    eng: 'Carne Louca',
                    bra: 'Carne Louca',
                    ger: 'Carne Louca',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/carnelouca1.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Sovány sertéshús, paradicsom, petrezselyem, fűszerek'],
                        eng: ['Lean pork meat, tomato, persley, spices'],
                        bra: [''],
                        ger: [ 'Mageres Schweinefleisch, Tomaten, Petresilie, Gewürze'],
                    },
                price: [890],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },

            
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Fritas',
                    eng: 'Fritas',
                    bra: 'Fritas',
                    ger: 'Fritas',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/fritas1.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Hasábburgonya sajttal'],
                        eng: ['French fries with molten cheese'],
                        bra: [''],
                        ger: [ 'Pommes mit Käse'],
                    },
                price: [590],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },


           
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Boca de anjo',
                    eng: 'Boca de anjo',
                    bra: 'Boca de anjo',
                    ger: 'Boca de anjo',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/bocadeanjo.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Füstölt tarja, szalámi, sajt, paradicsom, petrezselyem, olajbogyó'],
                        eng: ['Smoked pork shoulder, salami, cheese, tomato, persley, olive'],
                        bra: [' '],
                        ger: [ 'Geräucherte margerer Scweinekamm, Salami, Käse, Tomate, Petersille, Oliven'],
                    },
                price: [1190],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },




           
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Bauru',
                    eng: 'Bauru',
                    bra: 'Bauru',
                    ger: 'Bauru',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/bauru.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Sajt, sonka, oregánó, paradicsom'],
                        eng: ['Cheese, ham, oregano, tomato'],
                        bra: [''],
                        ger: [ 'Käse, Schinken, Oregano, Tomate'],
                    },
                price: [790],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },

            
    
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Bauru da Casa',
                    eng: 'Bauru da Casa',
                    bra: 'Bauru da Casa',
                    ger: 'Bauru da Casa',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/bauru.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Sajt, sonka, oregánó, paradicsom konfit'],
                        eng: ['Cheese, ham, oregano, tomato confit'],
                        bra: [''],
                        ger: [ 'Käse, Schinken, Oregano, Tomatenkonfit'],
                    },
                price: [990],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },

           
            
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Mini Churros',
                    eng: 'Mini Churros',
                    bra: 'Mini Churros',
                    ger: 'Mini Churros',
                },
                picture: <iPicture>{
                    enable: true,
                    path: 'assets/pictures/foods/churros.jpg'
                },
                description:
                    <iMultiLangDataMultiLine>{
                        hun: ['Édes, spanyol fánk'],
                        eng: ['Sweet, spanish pastry '],
                        bra: [''],
                        ger: [ 'Süße, spanische Krapfen'],
                    },
                price: [43],
                info: <iProductInfo>{
                    text:
                    <iMultiLangDataMultiLine>{
                        hun: [],
                        eng: [],
                        bra: [],
                        ger: [],
                    },
                }
            },
 
         

        ]
    }





];
