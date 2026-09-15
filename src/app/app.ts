import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrepriseService } from './service/entreprise-service';
import { Entreprise } from './model/Entreprise';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
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
