import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent implements OnInit {
  dateClass;
  profileUpdateForm: FormGroup;
  myProfileForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileUpdateFormIntialize();
  }
  get f() {
    return this.profileUpdateForm.controls;
  }
  profileUpdateFormIntialize() {
    this.profileUpdateForm = this.fb.group({
      name: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required]],
      bloodGroup: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      date: ["", [Validators.required]],
      state: ["", [Validators.required]],
      district: ["", [Validators.required]],
      contactdetailVisible: [""],
      registerAsDoner: ["", [Validators.required]],
    });
  }
  OnSubmit() {
    this.submitted = true;
    console.log(this.profileUpdateForm.value);
  }
}
