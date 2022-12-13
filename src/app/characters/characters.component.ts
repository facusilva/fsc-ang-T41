import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  constructor(private RestService:RestService) {}

  characters:any;

  ngOnInit():void{
    this.RestService.getCharacters(`https://rickandmortyapi.com/api/character/1,2,3,4,5`).subscribe( result => this.characters = result );
  }

}
