import { Injectable } from "@angular/core";
import { Brano } from "../model/brano";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  branoAttivo: Brano;
  listaArtisti: string = "";
  isLoadedBrano: boolean = false;
  branoSubject = new Subject<Brano>();
  brano$ = this.branoSubject.asObservable();
  constructor() {}

  /**
   * crea la stringa dell'artista
   * concatenando il feat se sono presenti collaborazioni
   */
  mostraArtisti(brano: Brano): string {
    this.listaArtisti = "";
    brano.artisti.forEach((artista) => {
      const index = brano.artisti.indexOf(artista);
      this.listaArtisti += artista.nomeArte;
      if (index > 0 && index < brano.artisti.length) {
        this.listaArtisti += ",";
      } else if (brano.artisti[index + 1]) {
        this.listaArtisti += " feat. ";
      }
    });

    if (this.listaArtisti.endsWith(","))
      this.listaArtisti = this.listaArtisti.substr(
        0,
        this.listaArtisti.length - 1
      );
    return this.listaArtisti;
  }

  /**
   * manda all'observer il brano
   */
  riproduciBrano(brano: Brano) {
    if (brano) {
      this.branoSubject.next(brano);
      this.branoAttivo = brano;
    } else {
      this.branoSubject.error("Brano non caricato correttamente");
    }
  }
}
