import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {Team} from '../../models/team.model';

@Component({
  selector: 'fdj-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
  }

  onLeagueSelection(leagueSelected: string) {
    this.teamsService.getTeamsByLeague(leagueSelected).subscribe(teams => this.teams = teams);
  }

}
