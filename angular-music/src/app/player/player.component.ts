import { Component, OnInit, ViewChild } from "@angular/core";
import { Howl } from "howler";
import { Brano } from "../model/brano";
import { PlayerService } from "../services/player.service";
import { RestApiService } from "../services/rest-api.service";
import { Slider } from "primeng/slider/slider";
@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  branoAttivo: Brano;
  player: Howl;
  isPlaying: boolean = false;
  @ViewChild("slider") slider: Slider;
  constructor(
    private playerService: PlayerService,
    private restApiService: RestApiService
  ) {}

  ngOnInit(): void {
    this.recuperaBrano();
  }

  /**
   * recupera il brano selezionato dalla lista
   */
  recuperaBrano() {
    this.playerService.brano$.subscribe((response) => {
      this.branoAttivo = response;
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
      src: [this.branoAttivo.path],
    });

    this.isPlaying = true;
    this.player.play();
  }
  /**
   * riproduce o mette in pausa il brano
   * @param pause valore del flag di riproduzione
   */
  togglePlayer(pause: boolean) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  /**
   * riproduce il brano successivo
   */
  next() {}

  /**
   * riproduce il brano precedente alla playlist
   */
  previous() {}

  seek() {
    let nuovoValore = +this.slider.value;
    let duration = this.player.duration();
    this.player.seek(duration * (nuovoValore / 100));
  }
  updateSlider() {
    let interval = setInterval(() => {
      this.slider.value =
        this.slider.value + Math.floor(this.player.duration() * 10) + 1;
      if (this.slider.value >= 100) {
        this.slider.value = 100;
        clearInterval(interval);
      }
    }, 2000);
  }
}
