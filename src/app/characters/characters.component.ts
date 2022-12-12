import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personajes: any = null;

  constructor (private http: HttpClient){}

  ngOnInit (){
    this.http.get("../../assets/database.json")
    .subscribe(
      result => {
        this.personajes = result;
      }
    );
  }
}
