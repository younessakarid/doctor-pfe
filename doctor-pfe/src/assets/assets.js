import Esthetiqueprothese from '../assets/Esthetique_prothese.png'
import Implantologie_esthetique_prothese from '../assets/Implantologie_esthetique_prothese.png'
import Parodontologie_exclusive from '../assets/Parodontologie_exclusive.png'
import chirurgie_dentaire from '../assets/chirurgie_dentaire.png'
import icon_water from '../assets/icone-de-l-eau-bleue.png'
import icon_pilule from '../assets/icone-pilule.png'

export const assets = {
  Esthetiqueprothese,
  Implantologie_esthetique_prothese,
  Parodontologie_exclusive,
  chirurgie_dentaire,
  icon_water,
  icon_pilule

}


export const specialityData = [
    {
    speciality : 'Esthétique prothèse',
    Image : Esthetiqueprothese
    },

    {
        speciality : 'Implantologie esthétique prothèse',
        Image : Implantologie_esthetique_prothese
    },

    {
        speciality : 'Parodontologie exclusive',
        Image : Parodontologie_exclusive
    },

    {
        speciality : 'chirurgie dentaire',
        Image : chirurgie_dentaire
    }
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Claude Finelle',
        image: Esthetiqueprothese,
        speciality: 'Esthétique prothèse',
        degree: 'C.E.S',
        experience: '25 Years',
        about: 'Le chirurgien-dentiste traite les problèmes bucco-dentaires : dents, gencives, nerfs et maxillaires. Il intervient pour le détartrage, les caries, les gencives irritées et la réparation des dents.',
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    },    

    // {
    //     _id: 'doc2',
    //     name: 'Dr. Gary Finelle ',
    //     image: Esthetiqueprothese,
    //     speciality: 'Esthétique prothèse',
    //     degree: 'C.E.S',
    //     experience: '25 Years',
    //     about: 'Le chirurgien-dentiste traite les problèmes bucco-dentaires : dents, gencives, nerfs et maxillaires. Il intervient pour le détartrage, les caries, les gencives irritées et la réparation des dents.',
    //     address:'59 Avenue de la Bourdonnais, 75007 Paris'
    // },    
    
]