import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  constructor(private route: ActivatedRoute, private RestService:RestService, private router: Router) {}

  character:any;
  id:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.RestService.getCharacter(this.id).subscribe( result => this.character = result );
}

  borrarPersonaje():void{
    this.RestService.deleteCharacter(this.id).subscribe();
    this.router.navigate(['/characters']);
  }
}
