import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  form: any={
    email:null,
    password: null
  }

  constructor(){}

  ngOnInit(): void {
    
  }
  onSubmit(): void{
    console.log(this.form)
  }

}
