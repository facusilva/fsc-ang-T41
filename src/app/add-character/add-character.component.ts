import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor(private RestService:RestService, private router: Router) {}

  id:string = "";
  name:string = "";
  status:string = "";
  species:string = "";
  gender:string = "";
  origin:string = "";
  image:string = "";

  guardar():void{
    let data = {
      id: this.id,
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
      image: this.image
    }

    this.RestService.addCharacter(data).subscribe();
    this.router.navigate(['/characters']);
  }
}
