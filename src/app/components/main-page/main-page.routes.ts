import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { PostDetailsPageComponent } from '../post-details-page/post-details-page.component';

export const MainPageRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailsPageComponent,
  },
];
