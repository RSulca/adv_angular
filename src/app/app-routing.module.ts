import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'graph1', component: Graphics1Component },
  //     { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
  //   ]
  // },
  {
    path:'',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NopagefoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
