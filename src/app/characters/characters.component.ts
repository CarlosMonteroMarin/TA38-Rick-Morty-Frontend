import { Component, Input, OnInit } from '@angular/core';
import { CharsService } from '../chars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personajes: any = null;

  constructor (private charsService: CharsService){}

  ngOnInit (){
    this.charsService.retorna()
    .subscribe(result => this.personajes = result);
  }

}
