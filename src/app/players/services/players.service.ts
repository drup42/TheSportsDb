import {Injectable} from '@angular/core';
import {FdjApiService} from '../../core/fdj-api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Player} from '../models/player';
import {map} from 'rxjs/operators';

@Injectable()
export class PlayersService extends FdjApiService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getPlayersTeam(teamName: string): Observable<Player[]> {
    return this.httpClient.get(`${this.baseUrl}/${this.apiKey}/searchplayers.php?t=${teamName}`)
      .pipe(map((response: any) => response.player.map(
        player => new Player(player.strPlayer, player.strPosition, player.dateBorn, player.strSigning, player.strCutout, player.strThumb)
      )));
  }
}
