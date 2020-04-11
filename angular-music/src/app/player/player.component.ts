import { Component, OnInit } from "@angular/core";
import { Howl } from "howler";
import { RestApiService } from "../services/rest-api.service";
import { Brano } from "../model/brano";
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  isPlaying: boolean;

  //path dei brani recuperati dalla chiamata
  sources_name: string[] = [];
  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {}

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
