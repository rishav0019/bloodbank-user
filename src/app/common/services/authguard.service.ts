import { AuthService } from "src/app/common/services/auth.service";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
