import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProfileMenu]'
})
export class ProfileMenuDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("click")
  next(): void {
    const element = this.elementRef.nativeElement.children[1];
    if (element.classList.contains("opened")) {
      element.classList.remove("opened");
    } else {
      element.classList.add("opened");
    }
  }

}
