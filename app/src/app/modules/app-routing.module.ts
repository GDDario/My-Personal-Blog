import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LayoutComponent } from "../pages/layout.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";

const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      }
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
