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
        fees : 140,
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    },    

    {
        _id: 'doc2',
        name: 'Dr. Gary Finelle ',
        image: Implantologie_esthetique_prothese,
        speciality: 'Implantologie esthétique prothèse',
        degree: 'C.E.S',
        experience: '12 Years',
        about: 'Dr Gary Finelle, expert en implantologie à Paris, intègre les technologies numériques dans ses traitements. Diplômé de Paris 7 et spécialisé à Harvard, il enseigne et publie activement, avec plus de 30 articles et un rôle de professeur visiteur à Harvard.',
        fees : 140,
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    },    

    {
        _id: 'doc3',
        name: 'Dr. Gaëlle Botilde',
        image: Parodontologie_exclusive,
        speciality: 'Parodontologie exclusive',
        degree: 'C.E.S',
        experience: '4 Years',
        about: 'Dr Gaëlle Botilde, chirurgienne-dentiste spécialisée en parodontologie et chirurgie buccale, est diplômée de Liège et a obtenu des spécialisations en implantologie et parodontologie européenne.',
        fees : 140,
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    },    

    {
        _id: 'doc4',
        name: 'Dr. Benjamin Orlik',
        image: chirurgie_dentaire,
        speciality: 'chirurgie dentaire',
        degree: 'D.E.S',
        experience: '4 Years',
        about: 'L\'endodontie traite les infections de la pulpe dentaire. Mon expertise consiste à éliminer les infections et restaurer les dents avec des techniques peu invasives et basées sur des données probantes.',
        fees : 490,
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    },    
    
]