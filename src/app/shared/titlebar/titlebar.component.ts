import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-titlebar",
  templateUrl: "./titlebar.component.html",
  styleUrls: ["./titlebar.component.scss"],
})
export class TitlebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  login() {
    this.router.navigateByUrl("/login");
  }
}
