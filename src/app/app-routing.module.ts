import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'character/:id',
    component: CharacterComponent
  },
  {
    path:'add',
    component: AddCharacterComponent
  },
  {
    path: 'update/:id',
    component: UpdateCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
