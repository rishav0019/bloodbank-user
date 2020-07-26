import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
