import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  retorna(){
    return this.http.get (`https://rickandmortyapi.com/api/character/2`);
  }
}
