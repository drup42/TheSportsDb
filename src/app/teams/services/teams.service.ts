import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FdjApiService} from '../../core/fdj-api.service';
import {Observable} from 'rxjs/Observable';
import {Player} from '../../players/models/player';
import {map} from 'rxjs/operators';
import {Team} from '../models/team.model';

@Injectable()
export class TeamsService extends FdjApiService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getTeamsByLeague(leagueName: string): Observable<Team[]> {
    return this.httpClient.get(`${this.baseUrl}/${this.apiKey}/search_all_teams.php?l=${leagueName}`)
      .pipe(map(
        (response: any) => response.teams.map(team => new Team(team.strTeam, team.strTeamBadge))
      ));
  }
}
