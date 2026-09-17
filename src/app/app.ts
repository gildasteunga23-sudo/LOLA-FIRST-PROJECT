import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrepriseService } from './service/entreprise-service';
import { Entreprise } from './model/Entreprise';
import { Header } from './header/header';
import { Confort } from './confort/confort';
import { Conflict } from './conflict/conflict';
import { A } from './a/a';
import { D } from './d/d';
import { F } from './f/f';
import { H } from './h/h';
import { L } from './l/l';
import { T } from './t/t';
import { About } from './about/about';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Conflict, Confort, A, D, F, H, L, T, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-projet');

  constructor(private entrepriseService:EntrepriseService){
      
    }

      enregistrementEntreprise(entreprise: Entreprise) {

        this.entrepriseService.enregistrementEntreprise(entreprise).subscribe(
            reponse => console.log(reponse)
            
        );
      }


  

}
