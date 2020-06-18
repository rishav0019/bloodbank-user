import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bloodbank-phone",
  templateUrl: "./bloodbank-phone.component.html",
  styleUrls: ["./bloodbank-phone.component.scss"],
})
export class BloodbankPhoneComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "state",
    "district",
    "name_of_center",
    "phone",
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Patna",
    weight: "Indira Gandhi Institute of MedicalScience,Patna",
    symbol: "2287099, 287099, 287404, 283744, 287225",
  },
  {
    position: 2,
    name: "Patna",
    weight: "Kurji Holy Family Hospital, Patna",
    symbol: "2262540, 2262516",
  },
  {
    position: 3,
    name: "Patna",
    weight: "Life Line Blood Bank, G.M Road,Patna",
    symbol: "2303025, 9234990509",
  },
  {
    position: 4,
    name: "Patna",
    weight: "Patliputra Blood Bank, AshokRajpath, Patna",
    symbol: "0612-2300840",
  },
  {
    position: 5,
    name: "Patna",
    weight: "National Blood Bank & ResearchCenter, Kankarbagh, Patna.",
    symbol: "2355575",
  },
  {
    position: 6,
    name: "Patna",
    weight: "Mahavir Cancer Institute,Phulawarisarif, Patna",
    symbol: "2250127, 2253956",
  },
  {
    position: 7,
    name: "Patna",
    weight:
      "State of the Art Model Blood Bank, C/o Jai Phrabha Hospital Kankarbagh, Patna.",
    symbol: "0612-2355805, 3253172",
  },
];
