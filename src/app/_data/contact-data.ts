import { iContactData, iContactLocation, iMultiLangData, iMultiLangDataMultiLine, iContactHours, iContactContact } from "./_data-models";


export const CONTACT_DATA:iContactData= <iContactData>{
    location: <iContactLocation>{
        title:<iMultiLangData>{
            hun:'Cím', 
            eng:'Address', 
            bra:'', 
            ger:'Adresse' 
        },
        address:<iMultiLangDataMultiLine>{
            hun:['3348 Szilvásvárad', 'Szalajka-Völgy út'], 
            eng:['3348 Szilvásvárad', 'Szalajka-Völgy út'], 
            ger:['3348 Szilvásvárad', 'Szalajka-Völgy út'] 
        }

    },
    contact:<iContactContact>{
        title:<iMultiLangData>{
            hun:'Elérhetőség', 
            eng:'Contact', 
            bra:'', 
            ger:'Verfügbarkeit' 
        },
        email:'N/A',
        phone:'N/A'


    },
    days:<iContactHours>{
        title:<iMultiLangData>{
            hun:'Nyitvatartás', 
            eng:'Open hours', 
            bra:'', 
            ger:'Öffnungszeiten' 
        },
    

        time:[
            <iMultiLangDataMultiLine>{
                hun:['Hétfő', 'zárva'], 
                eng:['Monday', 'closed'], 
                ger:['Montag', 'geschlossen'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Kedd', '12', '22'], 
                eng:['Tuesday', '12', '22'], 
                ger:['Dienstag', '12', '22'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Szerda', '12', '22'], 
                eng:['Wednesday', '12', '22'], 
                ger:['Mittwoch', '12', '22'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Csütörtök', '12', '22'], 
                eng:['Thursday', '12', '22'], 
                ger:['Donnerstag', '12', '22'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Péntek', '12', '24'], 
                eng:['Friday', '12', '24'], 
                ger:['Freitag', '12', '24'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Szombat', '12', '24'], 
                eng:['Saturday', '12', '24'], 
                ger:['Samstag', '12', '24'] 
            },
            <iMultiLangDataMultiLine>{
                hun:['Vasárnap', '12', '21'], 
                eng:['Sunday', '12', '21'], 
                ger:['Sonntag', '12', '21'] 
            },
    ]
    }
}