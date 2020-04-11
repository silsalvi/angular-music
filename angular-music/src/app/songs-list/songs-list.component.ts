import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { RestApiService } from "../services/rest-api.service";
import { Brano } from "../model/brano";
import { PlayerService } from "../services/player.service";

@Component({
  selector: "app-songs-list",
  templateUrl: "./songs-list.component.html",
  styleUrls: ["./songs-list.component.css"],
})
export class SongsListComponent implements OnInit {
  //brani recuperati dalla chiamata
  brani: Brano[];
  //lista di artisti
  nomiArtisti: string[] = [];

  isLoaded: boolean = false;

  // @Output() onPlayEmit: EventEmitter<any> = new EventEmitter();
  constructor(
    private restApiService: RestApiService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getBrani();
  }

  /**
   * richiama il rest api service per ottenere i brani
   */
  getBrani() {
    this.restApiService.getBrani().subscribe((brani) => {
      this.isLoaded = true;
      this.brani = brani;
      brani.forEach((brano, index) => {
        this.nomiArtisti[index] = this.playerService.mostraArtisti(brano);
      });
    });
  }

  onPlay(branoSelezionato: Brano) {
    this.playerService.riproduciBrano(branoSelezionato);
    this.playerService.isLoadedBrano = true;
  }
}
