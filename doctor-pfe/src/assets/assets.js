import Esthetiqueprothese from '../assets/Esthetique_prothese.png'
import Implantologie_esthetique_prothese from '../assets/Implantologie_esthetique_prothese.png'
import Parodontologie_exclusive from '../assets/Parodontologie_exclusive.png'
import chirurgie_dentaire from '../assets/chirurgie_dentaire.png'
import icon_water from '../assets/icone-de-l-eau-bleue.png'
import icon_pilule from '../assets/icone-pilule.png'
import Dentisterie_adhésive_et_esthétique from '../assets/Dentisterie_adhesive-et-esthetique.png'
import logo from '../assets/logo.png'

export const assets = {
  Esthetiqueprothese,
  Implantologie_esthetique_prothese,
  Parodontologie_exclusive,
  chirurgie_dentaire,
  icon_water,
  icon_pilule,
  Dentisterie_adhésive_et_esthétique,
  logo

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
    },
    {
        speciality : 'Dentisterie adhésive et esthétique',
        Image : Dentisterie_adhésive_et_esthétique
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
    {
        _id: 'doc5',
        name: 'Dr. Anne Favreul',
        image: Dentisterie_adhésive_et_esthétique,
        speciality: 'Dentisterie adhésive et esthétique',
        degree: 'D.E. Chir. Dent',
        experience: '9 Years',
        about: 'Le docteur Anne Favreul vous accueille au sein de son cabinet.Le chirurgien-dentiste, aussi appelé dentiste, prend en charge les problèmes bucco-dentaires. Les patients peuvent notamment le consulter pour un détartrage, le soin d\'une carie, le soulagement de gencives irritées, la réparation d\'une dent abîmée, la réalisation de prothèses dentaires ainsi que pour une demande esthétique.',
        fees : 135,
        address:'59 Avenue de la Bourdonnais, 75007 Paris'
    }
    
]