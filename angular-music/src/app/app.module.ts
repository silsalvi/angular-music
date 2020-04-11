import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePlayerComponent } from "./home/home.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SongsListComponent } from './songs-list/songs-list.component';
import { PlayerComponent } from './player/player.component';
@NgModule({
  declarations: [AppComponent, HomePlayerComponent, SongsListComponent, PlayerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
