import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailregionService } from '../Services/detailregion.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  p:number=1;
  games:any;
url = "/detailregion";

Region : any;
  getid: any;
constructor(private service : DetailregionService,  private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  // const id = this.activatedRoute.snapshot.params['id'];

this.service.getRegions().subscribe(data=>{
this.Region=data;
});

// this.service.getRegionsId(id).subscribe(data=>{
//   this.getid=data;
// });
}
}
