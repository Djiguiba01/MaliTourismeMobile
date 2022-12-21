import { Component } from '@angular/core';
import { DetailregionService } from '../Services/detailregion.service';

@Component({
  selector: 'app-ajoutregion',
  templateUrl: './ajoutregion.component.html',
  styleUrls: ['./ajoutregion.component.css']
})
export class AjoutregionComponent {

  nomregions!:any;
  coderegion!:any;
  activiterregion!:any;
  superficieregion!:any;
  languemregion!:any;
  description!:any;
  nombrecommentaire!:any;


  Region : any;
  image: any;
constructor(private service : DetailregionService){}

ngOnInit(): void {
this.service.getRegions().subscribe(data=>{
this.Region=data;
});
}


recupererParImage(event: any){
  this.image = event.target["files"][0];
  console.log(this.image)
}

reg = [{
  "nomregions": this.nomregions,
  "coderegion": this.coderegion,
  "activiterregion": this.activiterregion,
  "superficieregion": this.superficieregion,
  "languemregion": this.languemregion,
  "description": this.description,
  "nombrecommentaire": this.nombrecommentaire
}]

OnCreate(): void{
  console.log(this.reg);
  
  this.service.creer(this.image, this.nomregions, this.coderegion, this.activiterregion
    , this.superficieregion, this.languemregion, this.description, this.nombrecommentaire).subscribe(
      data => {
        console.log(data);
      });
}



}
