import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoginRegister]'
})
export class LoginRegisterDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("document:click", ["$event"])
  public changeForm(event: Event): void {
    const loginForm: HTMLElement = this.elementRef.nativeElement.querySelector(".loginForm");
    const registerForm: HTMLElement = this.elementRef.nativeElement.querySelector(".registerForm");
    const toggleLogin: HTMLElement = this.elementRef.nativeElement.querySelector(".toggle-mode.login");
    const toggleRegister: HTMLElement = this.elementRef.nativeElement.querySelector(".toggle-mode.register");

    if((<HTMLElement>event.target) == toggleRegister) {

      this.elementRef.nativeElement.style.height = "65vh";
      this.renderer.setStyle(registerForm, "display", "flex");
      this.renderer.setStyle(loginForm, "display", "none");
      this.renderer.setStyle(toggleLogin, "color", "#a2a2a2");
      this.renderer.setStyle(toggleRegister, "color", "#000");
    } else if ((<HTMLElement>event.target) == toggleLogin) {
      this.elementRef.nativeElement.style.height = "38vh";
      this.renderer.setStyle(loginForm, "display", "flex");
      this.renderer.setStyle(registerForm, "display", "none");
      this.renderer.setStyle(toggleRegister, "color", "#a2a2a2");
      this.renderer.setStyle(toggleLogin, "color", "#000");
    }
  }
}
