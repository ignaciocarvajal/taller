import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameModel } from '../models/gameData.mopdel';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  urlApi: string;
  constructor(
    private readonly http: HttpClient
  ) { 
    this.urlApi = environment.apiUrl;
  }

  getAll(): Observable<IGameModel[]> {
    const url = `/api/games`;
    return this.http.get(url).pipe(
      map( (response: IGameModel[]) => response)
    )    
  }

  delete(id: string){
    const url = `/api/games/delete/${id}`;
    return this.http.delete(url).pipe(
      map((res: any) => {
        return res;
      }),
      catchError( async (err) => console.error(err))
    )
  }
}
