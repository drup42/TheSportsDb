import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayersService} from './services/players.service';
import {PlayersComponent} from './components/players/players.component';
import {PlayerComponent} from './components/player/player.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [PlayersComponent, PlayerComponent],
  providers: [PlayersService]
})
export class PlayersModule { }
