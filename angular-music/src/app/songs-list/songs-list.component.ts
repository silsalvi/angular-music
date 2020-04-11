import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../services/rest-api.service";
import { Brano } from "../model/brano";
import { Howl } from "howler";
@Component({
  selector: "app-songs-list",
  templateUrl: "./songs-list.component.html",
  styleUrls: ["./songs-list.component.css"],
})
export class SongsListComponent implements OnInit {
  //brani recuperati dalla chiamata
  brani: Brano[];
  //lista di artisti
  listaArtisti: string = "";

  //path dei brani recuperati dalla chiamata
  sources_name: string[] = [];

  //brano attualmente in riproduzione
  branoAttuale: Brano;
  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.getBrani();
  }

  /**
   * richiama il rest api service per ottenere i brani
   */
  getBrani() {
    this.restApiService.getBrani().subscribe((brani) => {
      this.brani = brani;
      this.loadSong(this.brani);
    });
  }
  /**
   * prende i path dei brani
   */
  loadSong(brani: Brano[]) {
    brani.forEach((brano) => {
      this.sources_name.push(brano.path);
    });
    const sound = new Howl({
      src: this.sources_name,
    });
  }

  /**
   * crea la stringa dell'artista
   * concatenando il feat se sono presenti collaborazioni
   */
  mostraArtisti(brano: Brano) {
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
}
