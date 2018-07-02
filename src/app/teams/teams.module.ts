import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchLeagueComponent} from './components/search-league/search-league.component';
import {TeamsComponent} from './components/teams/teams.component';
import {TeamsService} from './services/teams.service';
import {LeaguesService} from './services/leagues.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [SearchLeagueComponent, TeamsComponent],
  providers: [LeaguesService, TeamsService]
})
export class TeamsModule { }
