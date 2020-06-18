import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required]],
    });
  }
}
