import { Component, OnInit } from "@angular/core";
import { DonerService } from "src/app/shared/services/doner.service";

@Component({
  selector: "app-doners",
  templateUrl: "./doners.component.html",
  styleUrls: ["./doners.component.scss"],
})
export class DonersComponent implements OnInit {
  constructor(private donerService: DonerService) {}
  doners: any = [];
  ngOnInit() {
    this.donerService.getDoner().subscribe((res) => {
      this.doners = res;
      console.log("get response", res);
    });
  }
}
