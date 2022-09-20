import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  slides: any[] = [
    {
      'img': '/assets/ip-address-tracker.PNG',
      'alt': 'Ip Address Tracker'
    },
    {
      'img': '/assets/remote-work.PNG',
      'alt': 'Remote Work'
    },
    {
      'img': '/assets/job-listing.PNG',
      'alt': 'job-listing'
    },
    {
      'img': '/assets/TFT.png',
      'alt': 'tft'
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
