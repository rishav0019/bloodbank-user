import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  constructor() {}

  imageObject: Array<object> = [
    {
      image:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg",
      thumbImage:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg",
      alt: "Image alt",
    },
    {
      image:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg",
      thumbImage:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg",
      alt: "Image alt",
    },
  ];

  galleryImageObject: Array<object> = [
    {
      image: "https://biharbloodbank.in/images/gallery/100_1339.jpg",
      thumbImage: "https://biharbloodbank.in/images/gallery/100_1339.jpg",
      alt: "Image alt",
    },
    {
      image: "https://biharbloodbank.in/images/gallery/DSC_0004.jpg",
      thumbImage: "https://biharbloodbank.in/images/gallery/DSC_0004.jpg",
      alt: "Image alt",
    },
    {
      image: "https://biharbloodbank.in/images/gallery/m7.jpg",
      thumbImage: "https://biharbloodbank.in/images/gallery/m7.jpg",
      alt: "Image alt",
    },

    {
      image: "https://biharbloodbank.in/images/gallery/12345.jpeg",
      thumbImage: "https://biharbloodbank.in/images/gallery/12345.jpeg",
      alt: "Image alt",
    },
  ];
  donationCampGalleryImageObject: Array<object> = [
    {
      image: "https://biharbloodbank.in/images/gallery/12345.jpeg",
      thumbImage: "https://biharbloodbank.in/images/gallery/12345.jpeg",
      alt: "Image alt",
    },
    {
      image: "https://biharbloodbank.in/images/gallery/4.jpg",
      thumbImage: "https://biharbloodbank.in/images/gallery/4.jpg",
      alt: "Image alt",
    },
    {
      image: "https://biharbloodbank.in/images/gallery/100_1339.jpg",
      thumbImage: "https://biharbloodbank.in/images/gallery/100_1339.jpg",
      alt: "Image alt",
    },
  ];

  ngOnInit(): void {}
}
