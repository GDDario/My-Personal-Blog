import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { AuthenticationDialogComponent } from './components/dialogs/authentication-dialog/authentication-dialog.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardLoadingComponent } from './components/loading/post-card-loading/post-card-loading.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostCardBigComponent } from './components/posts/post-card-big/post-card-big.component';
import { PostCardMiniComponent } from './components/posts/post-card-mini/post-card-mini.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { LoginRegisterDirective } from './directives/login-register.directive';
import { SlideNextDirective } from './directives/slide-next.directive';
import { SlidePreviousDirective } from './directives/slide-previous.directive';
import { AppRoutingModule } from './modules/app-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CategoriesPageComponent } from './pages/categories/categories-page/categories-page.component';
import { CategoriesPostsPageComponent } from './pages/categories/categories-posts-page/categories-posts-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './pages/layout.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { AccountSettingsPageComponent } from './pages/profile-page/account-settings-page/account-settings-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserActivityPageComponent } from './pages/profile-page/user-activity-page/user-activity-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ChangePasswordDialogComponent } from './components/dialogs/change-password-dialog/change-password-dialog.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { NewCommentComponent } from './components/comments/new-comment/new-comment.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';

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
    AuthenticationDialogComponent,
    LoginRegisterDirective,
    AccountSettingsPageComponent,
    UserActivityPageComponent,
    ProfilePageComponent,
    ChangePasswordDialogComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
