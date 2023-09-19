import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LayoutComponent } from "../pages/layout.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { CategoriesPageComponent } from "../pages/categories/categories-page/categories-page.component";
import { CategoriesPostsPageComponent } from "../pages/categories/categories-posts-page/categories-posts-page.component";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { SearchPageComponent } from "../pages/search-page/search-page.component";
import { PostPageComponent } from "../pages/post-page/post-page.component";

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
      },
      {
        path: "contact",
        component: ContactPageComponent
      },
      {
        path: "about",
        component: AboutPageComponent
      },
      {
        path: "search",
        component: SearchPageComponent
      },
      {
        path: "post/:urlPath",
        component: PostPageComponent
      },
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
