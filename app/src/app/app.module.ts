import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout.component';
import { PostCardBigComponent } from './components/cards/post-card-big/post-card-big.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardLoadingComponent } from './components/loading/post-card-loading/post-card-loading.component';
import { ProfileCardComponent } from './components/cards/profile-card/profile-card.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { AsideComponent } from './components/aside/aside.component';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesPageComponent } from './pages/categories/categories-page/categories-page.component';
import { PostCardMiniComponent } from './components/cards/post-card-mini/post-card-mini.component';
import { SlideNextDirective } from './directives/slide-next.directive';
import { SlidePreviousDirective } from './directives/slide-previous.directive';
import { CategoriesPostsPageComponent } from './pages/categories/categories-posts-page/categories-posts-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfileMenuDirective } from './directives/profile-menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LayoutComponent,
    HeaderComponent,
    PostCardBigComponent,
    PostCardLoadingComponent,
    ProfileCardComponent,
    CategoriesListComponent,
    AsideComponent,
    FooterComponent,
    CategoriesPageComponent,
    PostCardMiniComponent,
    SlideNextDirective,
    SlidePreviousDirective,
    CategoriesPostsPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    SearchPageComponent,
    PostsContainerComponent,
    PostPageComponent,
    ProfileMenuDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
