import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  slides: any[] = [
    {
      img: "assets/ip-address-tracker.PNG",
      title: $localize `Ip Address Tracker`,
      technologies: "Angular | Typescript"
    },
    {
        img: "assets/remote-work.PNG",
        title: $localize `Remote Work`,
        technologies: "Angular | Typescript"
    },
    {
        img: "assets/job-listing.PNG",
        title: $localize `Job Listing`,
        technologies: "Angular | Typescript"
    },
    {
        img: "assets/TFT.png",
        title: $localize `Final Project`,
        technologies: "Angular | Typescript"
    }
  ];
  slideIndex: number = 0;

  showSlide(index: number) {
    this.slideIndex = index;
  }

  prev() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
    console.log("slideIndex: " + this.slideIndex);
  }

  next() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    console.log("slideIndex: " + this.slideIndex);
  }
}
