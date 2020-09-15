import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', redirectTo: 'games', pathMatch: 'full'
},
{
  path: 'games', loadChildren: () => import('./views/pages/game-main-page/game-main-page.module').then(
    (m) => m.GameMainPageModule
  )
},
{ path: 'games/create', loadChildren: () => import('./views/pages/games-create-page/games-create-page.module').then(
  (m) => m.GamesCreatePageModule
)},
{ path: 'games/detail/:id', loadChildren: () => import('./views/pages/games-detail-page/games-detail-page-routing.module').then(
  (m) => m.GamesDetailPageRoutingModule
)},
{ path: 'games/update/:id', loadChildren: () => import('./views/pages/games-update-page/games-update-page.module').then(
  (m) => m.GamesUpdatePageModule
)},
{path: '**', redirectTo: 'games'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
