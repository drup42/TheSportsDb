import {Routes} from '@angular/router';
import {PlayersComponent} from './components/players/players.component';

export const playersRoutes: Routes = [
  { path: ':teamName/players', component: PlayersComponent}
];
