import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'harry-potter',
    loadChildren: () => import('./harry-potter/harry-potter.module').then( m => m.HarryPotterPageModule)
  },  {
    path: 'homem-aranha',
    loadChildren: () => import('./homem-aranha/homem-aranha.module').then( m => m.HomemAranhaPageModule)
  },
  {
    path: 'thor-amor',
    loadChildren: () => import('./thor-amor/thor-amor.module').then( m => m.ThorAmorPageModule)
  },
  {
    path: 'jujutsu',
    loadChildren: () => import('./jujutsu/jujutsu.module').then( m => m.JujutsuPageModule)
  },
  {
    path: 'top-gun',
    loadChildren: () => import('./top-gun/top-gun.module').then( m => m.TopGunPageModule)
  },
  {
    path: 'dragon-ball',
    loadChildren: () => import('./dragon-ball/dragon-ball.module').then( m => m.DragonBallPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
