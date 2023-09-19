import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild("searchInput") public searchInput: ElementRef;

  constructor(private router: Router) { }

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
}
