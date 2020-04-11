import { Component, OnInit, Input } from "@angular/core";
import { Howl } from "howler";
import { Brano } from "../model/brano";
import { PlayerService } from "../services/player.service";
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  @Input() brano: Brano;
  player: Howl;
  isPlaying: boolean = false;
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.recuperaBrano();
  }

  /**
   * recupera il brano selezionato dalla lista
   */
  recuperaBrano() {
    this.playerService.brano$.subscribe((response) => {
      this.brano = response;
      this.playSong();
    });
  }
  /**
   * avvia il brano
   */
  playSong() {
    if (this.player) {
      this.isPlaying = false;
      this.player.stop();
    }
    this.player = new Howl({
      src: [this.brano.path],
    });

    this.isPlaying = true;
    this.player.play();
  }
  togglePlayer(pause: boolean) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
}
