import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  constructor(private http: HttpClient) { }

  retorna(){
    return this.http.get ("https://rickandmortyapi.com/api/character/1,2,3,4,5");
  }
}
