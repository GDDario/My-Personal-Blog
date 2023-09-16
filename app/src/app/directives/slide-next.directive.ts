import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideNext]'
})
export class SlideNextDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("click")
  next(): void {
    const element = this.elementRef.nativeElement.parentElement.children[1];
    let postsContainer = element.getElementsByClassName("card");
    element.append(postsContainer[0]);
  }

}
