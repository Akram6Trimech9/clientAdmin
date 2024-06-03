import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Utilisateurs',
    url: '/users',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Rendez-vous',
    url: '/rdvs',
    iconComponent: { name: 'cil-calendar' }
  },
  {
    name: 'Contacts', 
    url: '/contacts',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Actualités',
    url: '/actuality',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Ajouter une actualité',
        url: '/addactualities',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier les actualités',
        url: '/actualities',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Catégorie d\'actualités',
        url: '/addCategoryActuality',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier toutes les catégories',
        url: '/categoryActuality',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Documents',
    url: '/documents',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Ajouter un document',
        url: '/addDocument',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vérifier les documents',
        url: '/documents',
        icon: 'nav-icon-bullet'
      } 
    ]
  }
];
