import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LayoutComponent } from "../pages/layout.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { CategoriesPageComponent } from "../pages/categories/categories-page/categories-page.component";
import { CategoriesPostsPageComponent } from "../pages/categories/categories-posts-page/categories-posts-page.component";

const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            component: CategoriesPageComponent,
          },
          {
            path: ":id",
            component: CategoriesPostsPageComponent
          }
        ]
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
