import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"]
})
export class ContactPageComponent implements OnInit {
  public contactForm: FormGroup;

  public ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  public getEmailError(): string {
    if (this.contactForm.controls["email"].hasError("required")) {
      return "You must enter a value";
    }

    return this.contactForm.controls["email"].hasError("email") ? "Not a valid email" : "";
  }

  public onSubmit(): void {
    console.log(this.contactForm);

  }
}
