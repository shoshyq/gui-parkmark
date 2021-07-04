import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from '../models/search.model';
import { ParkSpot } from '../models/parkspot.model';
@Injectable({
  providedIn: 'root'
})
export class SearchesService {

  url="https://localhost:44374/api/searches"
  constructor(private http:HttpClient) { }
  AddImmidiateSearch(newSearch:Search):Observable<Map<ParkSpot,string>> {
      return this.http.post<Map<ParkSpot,string>>(`${this.url}/addImmidSearch`,newSearch);
      }
      
}