import { Component } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent {

  detalles: any = null;

  constructor (private detailsService: DetailsService){}


  ngOnInit (){
    this.detailsService.retorna()
    .subscribe(result => this.detalles = result);
  }

}

