import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  navLinks;
  activeLinkIndex;
  constructor(private router: Router) {
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

  ngOnInit() {
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.navLinks.indexOf(
    //     this.navLinks.find((tab) => tab.link === "." + this.router.url)
    //   );
    // });
  }

  imageObject: Array<object> = [
    {
      image:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg", // Support base64 image
      thumbImage:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg", // Support base64 image

      alt: "Image alt", //Optional: You can use this key if want to show image with alt
    },
    {
      image:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg", // Support base64 image
      thumbImage:
        "http://www.bloodconnect.org/sites/default/files/slide%20layer1_0.jpg", // Support base64 image
      // title: "Image title", //Optional: You can use this key if want to show image with title
      alt: "Image alt", //Optional: You can use this key if want to show image with alt
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
}
/*
 {
      image: "",
      thumbImage: "",

      alt: "Image alt",
    },

    */
