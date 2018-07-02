import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LeaguesService} from '../../services/leagues.service';

@Component({
  selector: 'fdj-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.css']
})
export class SearchLeagueComponent implements OnInit {

  @Output() selectLeague = new EventEmitter<string>();
  leagues: string[] = [];
  searchedTerm: string;

  constructor(private leaguesService: LeaguesService) {
  }

  ngOnInit() {
  }

  isLookingForALeague(): boolean {
    return this.leagues.length > 1;
  }

  selectLeagueSuggestion(league: string): void {
    this.searchedTerm = league;
    this.searchLeagueForTerm();
  }

  searchLeagueForTerm(): void {
    this.leagues = [];
    if (!this.searchedTerm || 0 === this.searchedTerm.length) {
      return;
    }

    this.leaguesService.searchLeagues(this.searchedTerm).subscribe((leagues: any) => {
      this.leagues = leagues;
      if (this.leagues.length === 1) {
        this.selectLeague.emit(this.leagues[0]);
      } else {
        //this.selectLeague.emit(null);
      }
    });
  }
}
