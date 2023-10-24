import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LayoutComponent } from "../pages/layout.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { CategoriesPageComponent } from "../pages/categories/categories-page/categories-page.component";
import { CategoriesPostsPageComponent } from "../pages/categories/categories-posts-page/categories-posts-page.component";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { SearchPageComponent } from "../pages/search-page/search-page.component";
import { PostPageComponent } from "../pages/post-page/post-page.component";
import { UserActivityPageComponent } from "../pages/profile-page/user-activity-page/user-activity-page.component";
import { AccountSettingsPageComponent } from "../pages/profile-page/account-settings-page/account-settings-page.component";
import { ProfilePageComponent } from "../pages/profile-page/profile-page.component";

const siteName = "By Personal Blog";

const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent,
        title: `Home - ${siteName}`,
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            component: CategoriesPageComponent,
            title: `Categories - ${siteName}`,
          },
          {
            path: ":id",
            component: CategoriesPostsPageComponent
          }
        ]
      },
      {
        path: "contact",
        component: ContactPageComponent,
        title: `Contact - ${siteName}`
      },
      {
        path: "about",
        component: AboutPageComponent,
        title: `About - ${siteName}`
      },
      {
        path: "search",
        component: SearchPageComponent,
        title: `Search - ${siteName}`
      },
      {
        path: "post/:urlParam",
        component: PostPageComponent
      },
      {
        path: "profile",
        component: ProfilePageComponent,
        children: [
          {
            path: "user-activity",
            component: UserActivityPageComponent,
            title: `User Activity - ${siteName}`
          },
          {
            path: "account-settings",
            component: AccountSettingsPageComponent,
            title: `Account Settings - ${siteName}`
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
