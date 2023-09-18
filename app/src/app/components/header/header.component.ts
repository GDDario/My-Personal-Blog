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

  public onSearch(): void {
    let search: string = this.searchInput.nativeElement.value;

    if (search != null) {
      this.router.navigate(["/search"], { queryParams: { value: search } });
    }
  }
}
