import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../common/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.user.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
