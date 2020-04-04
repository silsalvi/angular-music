import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Brano } from "../model/brano";
@Injectable({
  providedIn: "root",
})
export class RestApiService {
  private url = "./assets/app-data/brani.json";
  constructor(private http: HttpClient) {}
  /**
   * recupera i brani
   */
  getBrani() {
    return this.http.get<Brano[]>(this.url);
  }
}
