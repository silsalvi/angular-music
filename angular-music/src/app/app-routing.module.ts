import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePlayerComponent } from "./home/home.component";

const routes: Routes = [{ path: "home", component: HomePlayerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
