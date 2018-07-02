import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Player} from '../../models/player';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'fdj-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  teamName: string;

  constructor(private playersService: PlayersService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.fetchPlayersFromTeam(this.teamName);
  }

  fetchPlayersFromTeam(teamName: string) {
    this.playersService.getPlayersTeam(teamName).subscribe((players: Player[]) => this.players = players);
  }

  goBack(): void {
    this.location.back();
  }

}
