import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlidePrevious]'
})
export class SlidePreviousDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("click")
  previous(): void {
    const element = this.elementRef.nativeElement.parentElement.children[1];
    let postsContainer = element.getElementsByClassName("card");
    element.prepend(postsContainer[postsContainer.length - 1]);
  }

}
