import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FdjApiService} from '../../core/fdj-api.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LeaguesService extends FdjApiService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  searchLeagues(searchedTerm: string): Observable<string[]> {
    return this.httpClient.get(`${this.baseUrl}/${this.apiKey}/all_leagues.php`)
      .pipe(
        map((response: any) => {
          return response.leagues.filter((league: any) => {
            return league.strSport === 'Soccer' && league.strLeague.indexOf(searchedTerm.trim()) !== -1;
          }).map((league: any) => league.strLeague);
        })
      );
  }
}
