import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:3000/characters/";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public getCharacters(){
    return this.http.get(baseUrl);
  }

  public getCharacter(id:any){
    return this.http.get(baseUrl+id);
  }

  public deleteCharacter(id:any){
    return this.http.delete(baseUrl+id);
  }

  public addCharacter(data:any){
    return this.http.post(baseUrl, data);
  }

  public updateCharacter(id:any, data:any){
    return this.http.put(baseUrl+id, data);
  }
}
