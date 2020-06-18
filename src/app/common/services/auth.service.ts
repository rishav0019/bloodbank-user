import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, User } from "firebase";
import { Observable } from "rxjs";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: Observable<User>;
  isloggedIn: boolean;
  constructor(private afAuth: AngularFireAuth) {
    this.isloggedIn = false;
  }

  login(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((firebaseUser) => {
        if (firebaseUser) {
          this.isloggedIn = true;
          console.log("Login Success", firebaseUser.user);
        } else {
          this.isloggedIn = false;
        }
      });
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
}
