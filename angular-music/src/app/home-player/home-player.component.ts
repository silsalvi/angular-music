import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../services/rest-api.service";
import { Brano } from "../model/brano";

@Component({
  selector: "app-home-player",
  templateUrl: "./home-player.component.html",
  styleUrls: ["./home-player.component.css"],
})
export class HomePlayerComponent implements OnInit {
  brani: Brano[];
  constructor(private restApiService: RestApiService) {}

  ngOnInit(): void {
    this.getBrani();
  }

  /**
   * richiama il rest api service per ottenere i brani
   */
  getBrani() {
    this.restApiService.getBrani().subscribe((brani) => (this.brani = brani));
  }
}
