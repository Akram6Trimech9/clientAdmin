import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dash/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Utilisateurs',
    url: '/dash/users',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Rendez-vous',
    url: '/dash/rdvs',
    iconComponent: { name: 'cil-calendar' }
  },
  {
    name: 'Contacts', 
    url: '/dash/contacts',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Actualités',
    url: '/dash/actuality',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Ajouter une actualité',
        url: '/dash/addactualities',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier les actualités',
        url: '/dash/actualities',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Catégorie d\'actualités',
        url: '/dash/addCategoryActuality',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier toutes les catégories',
        url: '/dash/categoryActuality',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Documents',
    url: '/dash/documents',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Ajouter un document',
        url: '/dash/addDocument',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier les documents',
        url: '/dash/documents',
        icon: 'nav-icon-bullet'
      } 
    ]
  }
];
