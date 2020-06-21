import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  links = [
    { name: "Doners", link: "doners" },
    { name: "Requests", link: "requests" },
    { name: "My Donation History", link: "doners" },
    { name: "Profile", link: "my-profile" },
  ];
  activeLink;

  constructor() {}

  ngOnInit() {
    this.activeLink = this.links[0].name;
  }
}
