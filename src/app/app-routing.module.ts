import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news',
  },
  {
    path: 'news',
    loadChildren: () =>
      import('../app/components/index-page/index-page.module').then(
        (m) => m.IndexPageModule
      ),
  },
  { path: '**', redirectTo: 'pageNotFound' },
  { path: 'pageNotFound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
