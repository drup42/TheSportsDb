import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TeamsModule} from './teams/teams.module';
import {PlayersModule} from './players/players.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TeamsModule,
    PlayersModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
