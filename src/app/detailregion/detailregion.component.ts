import { DetailregionService } from './../Services/detailregion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent {
  detailRegion : any;
  constructor(private service : DetailregionService){}

  ngOnInit(): void {
  this.service.getRegions().subscribe(data=>{
  this.detailRegion=data;
});
  }

}
