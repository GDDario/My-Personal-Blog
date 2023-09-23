import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild("searchInput") public searchInput: ElementRef;
  public isLoggedIn: boolean;
  public loginSubscription: Subscription;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  public ngOnInit(): void {
    this.loginSubscription = this.authenticationService.loginSubject.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  public onSearch(event: Event): void {
    if (event instanceof KeyboardEvent) {
      if (event.key != "Enter")
      return;
    }
    let search: string = this.searchInput.nativeElement.value;

    if (search.trim() != "") {
      this.router.navigate(["/search"], { queryParams: { value: search } });
      this.searchInput.nativeElement.value = "";
    }
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
