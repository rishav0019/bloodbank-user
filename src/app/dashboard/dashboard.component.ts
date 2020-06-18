import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  navLinks;
  constructor() {}

  ngOnInit() {
    this.navLinks = [
      {
        label: "About-Us",
        link: "about-us",
        index: 0,
      },
      {
        label: "Bloodbank Number",
        link: "phone-number",
        index: 1,
      },
      {
        label: "Blood Donation Eligibility",
        link: "eligibility",
        index: 2,
      },
      {
        label: "Important Links",
        link: "./tabtest3",
        index: 3,
      },
      {
        label: "Donor Vs Receiver",
        link: "./tabtest3",
        index: 4,
      },
    ];
  }
}
