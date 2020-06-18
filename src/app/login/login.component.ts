import { Component, OnInit, Inject } from "@angular/core";

import * as firebaseui from "firebaseui";

import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AccountService } from "../shared/services/account.service";

import { Account } from "../shared/models/account.model";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private afAuth: AngularFireAuth,
    private accountService: AccountService,
    private router: Router
  ) {
    this.dialogRef.disableClose = false;
  }

  ngOnInit() {}

  successCallback(event) {
    let user = event.authResult.user;
    let account: Account = {
      uid: user.uid ? user.uid : " ",
      displayName: user.displayName ? user.displayName : " ",
      email: user.email ? user.email : " ",
      phoneNumber: user.phoneNumber ? user.phoneNumber : " ",
    };
    this.accountService.setAccount(account).then(() => {
      console.log("111111111111111111111111111111111");

      this.dialogRef.close(null);
      window.location.reload();
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
