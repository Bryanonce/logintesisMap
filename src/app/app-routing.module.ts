import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'mapa', loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)},
  {
    path: 'peligro',
    loadChildren: () => import('./peligro/peligro.module').then( m => m.PeligroPageModule)
  },
  {
    path: 'render',
    loadChildren: () => import('./render/render.module').then( m => m.RenderPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
