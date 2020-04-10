import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePlayerComponent } from "./home/home.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { ButtonModule } from "primeng/button";
@NgModule({
  declarations: [AppComponent, HomePlayerComponent, LoadingScreenComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
