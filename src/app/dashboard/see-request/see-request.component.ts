import { RequestService } from "./../../shared/services/request.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-see-request",
  templateUrl: "./see-request.component.html",
  styleUrls: ["./see-request.component.scss"],
})
export class SeeRequestComponent implements OnInit {
  panelOpenState;
  requests: any = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getRequests().subscribe((res) => {
      this.requests = res;
      console.log(res);
    });
  }
}
