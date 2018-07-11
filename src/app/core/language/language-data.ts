import { iLanguage } from "./language-model";


export const LANGUAGES: iLanguage[] = [
    {id: 'hun', name: 'Magyar', icon:"assets/icons/flag-hun.svg"},
    {id: 'eng', name: 'English', icon:"assets/icons/flag-uk.svg"},
    {id: 'bra', name: 'Português', icon:"assets/icons/flag-bra.svg"},
    // {id: 'ger', name: 'Deutsch', icon:"assets/icons/flag-ger.svg"},
    // {id: 'fra', name: 'Français', icon:"assets/icons/flag-fra.svg"},
  ];

  export const textNAVIGATION = {

      menu:{ 
        hun: 'Étlap',
        eng: 'Menu',
        bra: 'Cardápio',
      },
      drinks:{ 
        hun: 'Itallap',
        eng: 'Drink menu',
        bra: 'Bebidas',
      },
      news:{ 
        hun: 'Hírek',
        eng: 'News',
        bra: 'Notícias',
      },
      gallery:{ 
        hun: 'Galéria',
        eng: 'Gallery',
        bra: 'Notícias',
      },
      us:{ 
        hun: 'Rólunk',
        eng: 'About Us',
        bra: 'Gente',
      },
      contact:{ 
        hun: 'Elérhetőségek',
        eng: 'Contact',
        bra: 'Contatos'
      },
 
    }
  ;