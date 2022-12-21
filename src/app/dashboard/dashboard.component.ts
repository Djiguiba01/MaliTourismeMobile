import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaysService } from '../Services/pays.service';
import { UsersList } from '../Services/users-list';
import { UsersListService } from '../Services/users-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  voirPays : any;
  constructor(private service : PaysService, private route: ActivatedRoute){}

  ngOnInit(): void {

//   const id = this.route.snapshot.params['id_pays']
//   this.service.getPays(id).subscribe(data=>{
//   this.voirPays=data;
//   console.log(" afficher " + this.voirPays)
// });



  this.service.getPays().subscribe(data=>{
  console.log(" afficher " + this.voirPays)

  this.voirPays = data;
  console.log(" afficher " + this.voirPays)
  }
);
  }
}
