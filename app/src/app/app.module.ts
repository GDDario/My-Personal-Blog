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
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardLoadingComponent } from './components/loading/post-card-loading/post-card-loading.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { AsideComponent } from './components/aside/aside.component';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    LayoutComponent,
    HeaderComponent,
    PostCardComponent,
    PostCardLoadingComponent,
    ProfileCardComponent,
    CategoriesListComponent,
    AsideComponent,
    FooterComponent,

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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
