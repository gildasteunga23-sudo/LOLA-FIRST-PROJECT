import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise} from '../model/Entreprise';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  constructor(private http:HttpClient){}
private url="http://localhost:8080/api/entrprise";
  

  enregistrementEntreprise(entreprise: Entreprise) {
return this.http.post<Entreprise>(this.url, entreprise);
  } 
 listerEntreprise() {
return this.http.get<Entreprise []>(this.url);
  } 
  


}
