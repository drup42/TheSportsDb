import {environment} from '../../environments/environment';

export abstract class FdjApiService {

  protected baseUrl = environment.baseUrl;
  protected apiKey = environment.apiKey;
}
