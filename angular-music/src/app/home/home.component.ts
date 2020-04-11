import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../services/player.service";
import { Brano } from "../model/brano";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomePlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
