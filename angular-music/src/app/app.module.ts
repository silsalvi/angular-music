import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePlayerComponent } from "./home-player/home-player.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";

@NgModule({
  declarations: [AppComponent, HomePlayerComponent, LoadingScreenComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
