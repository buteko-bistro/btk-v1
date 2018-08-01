import { iProductGroup, iMultiLangData, iDrink, eDrinkTypes, iPicture, iProductInfo, ePictureStyle, ePictureType, iFood } from "./_data-models";



export const FOODS_DATA: iProductGroup[] = [




    <iProductGroup>{
        category:
            <iMultiLangData>{
                hun: 'Coxinha',
                eng: 'Coxinha',
                bra: 'Coxinha',
                ger: 'Coxinha',
            },

        columns: ['name', 'db'],

        description: 
        <iMultiLangData>{
            hun: "A Coxinha népszerű étel Brazíliában, apróra vágott vagy aprított csirkehúsból, tésztával borítva, csirkecomb alakú, rántott és pirított formában. ",
            eng: 'Coxinha is a popular food in Brazil consisting of chopped or shredded chicken meat, covered in dough, molded into a shape resembling a chicken leg, battered and fried. ',
            bra: 'Cappy Desc bra',
            ger: 'Coxinha ist ein beliebtes Nahrungsmittel in Brasilien, das aus gehacktem oder geschnetzeltem Hühnerfleisch besteht, mit Teig bedeckt, in eine Form geformt, die an Hähnchenschenkel erinnert, angeschlagen und gebraten wird.',
         },  

        list: [



            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Csirkés Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_1.png'
                },
                description:
                    <iMultiLangData>{
                        hun: 'Csirke, paradicsom, hagyma',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: "A Coxinha népszerű csirkecomb alakú krokett Brazíliából, apróra vágott csirkehússal töltve.",
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },




            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_5.png',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: '',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },

            

            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_12.jpg',
                    disable: true
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },



            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_13.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },


            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_8.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },


            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_14.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },

            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_3.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },

            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_4.png',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_1.png',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_13.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },


            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_3.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },

            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_4.png',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_1.png',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },
            <iFood>{
                id: '',
                name: <iMultiLangData>{
                    hun: 'Sajtos sonkás Coxinha',
                    eng: '',
                    bra: '',
                    ger: '',
                },
                picture: <iPicture>{
                    path: 'assets/pictures/foods/coxinha_13.jpg',
                    disable: false
                },
                description:
                    <iMultiLangData>{
                        hun: 'Trapista sajt, sonka, paradicsom, dfsdfsd, dfdfsdf rdfs ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                price: [100],
                info: <iProductInfo>{
                    text: <iMultiLangData>{
                        hun: 'Vmi info dgsdfgsdg dsf gs dfgbs g s fgjk sjg sj gkjs gkjs gkj sdkjg skdj gkjsd gk sdkjg ',
                        eng: '',
                        bra: '',
                        ger: '',
                    },
                }
            },


        ]
    }





];
