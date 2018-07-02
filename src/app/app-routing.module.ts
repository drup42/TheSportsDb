import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {playersRoutes} from './players/players.routes';
import {teamsRoutes} from './teams/teams.routes';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...teamsRoutes,
  ...playersRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
