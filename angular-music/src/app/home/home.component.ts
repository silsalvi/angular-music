import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../services/rest-api.service";
import { Brano } from "../model/brano";
import { Howl } from "howler";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomePlayerComponent implements OnInit {
  //brani recuperati dalla chiamata
  brani: Brano[];

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
}
