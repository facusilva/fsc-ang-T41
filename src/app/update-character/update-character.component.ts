import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private RestService:RestService, private router: Router) {}


  id:any;
  name:string = "";
  status:string = "";
  species:string = "";
  gender:string = "";
  origin:string = "";
  image:string = "";

  character:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.RestService.getCharacter(this.id).subscribe( result => this.character = result );

    this.name=this.character.name;
    this.status=this.character.status;
    this.species=this.character.species;
    this.gender=this.character.gender;
    this.origin=this.character.origin;
    this.image=this.character.image;

  }

  update():void{
    let data = {
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
      image: this.image
    }

    this.RestService.updateCharacter(this.id, data).subscribe();
    this.router.navigate(['/characters']);
  }
}
