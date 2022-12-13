import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  constructor(private route: ActivatedRoute, private RestService:RestService) {}

  character:any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.RestService.getCharacters(`https://rickandmortyapi.com/api/character/`+id).subscribe( result => this.character = result );

}

}
