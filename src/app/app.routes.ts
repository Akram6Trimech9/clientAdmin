import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
 export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DefaultLayoutComponent,
     children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'rdvs',
        loadChildren: () => import('./views/rdv/rdv.module').then((m) => m.RdvModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./views/contact/contact.module').then((m) => m.ContactModule)
      },
      {
        path: 'addCategoryActuality',
        loadChildren: () => import('./views/add-category-actuality/add-category-actuality.module').then((m) => m.AddCategoryActualityModule)
      },
      {
        path: 'categoryActuality',
        loadChildren: () => import('./views/category-actuality/category-actuality.module').then((m) => m.CategoryActualityModule)
      },
      {
        path: 'actualities',
        loadChildren: () => import('./views/actualities/actualities.module').then((m) => m.ActualitiesModule)
      },
      {
        path: 'update-actuality/:id',
        loadChildren: () => import('./views/update-actuality/update-actuality.module').then((m) => m.UpdateActualityModule)
      },
      {
        path: 'addactualities',
        loadChildren: () => import('./views/add-actuality/add-actuality.module').then((m) => m.AddActualityModule)
      },
      {
        path: 'myprofile',
        loadChildren: () => import('./views/my-profile/my-profile.module').then((m) => m.MyProfileModule)
      },
      {
        path: 'addDocument',
        loadChildren: () => import('./views/add-document/add-document.module').then((m) => m.AddDocumentModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./views/all-documents/all-documents.module').then((m) => m.AllDocumentsModule)
      },
      {
        path: 'documents/:id',
        loadChildren: () => import('./views/document-details/document-details.module').then((m) => m.DocumentDetailsModule)
      },
      {
        path: 'rdv/:id',
        loadChildren: () => import('./views/rdv-details/rdv-details.module').then((m) => m.RdvDetailsModule)
      },
     ]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule)
  },
  
];
