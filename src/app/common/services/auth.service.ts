import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, User } from "firebase";
import { Observable, of } from "rxjs";
import { CanActivate, Router } from "@angular/router";
import { switchMap } from "rxjs/internal/operators/switchMap";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  async logout() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/"]);
  }
}
