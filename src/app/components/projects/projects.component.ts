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
      description: $localize `This website allows you to introduce a IP address and see where it is located this device in a map. Also, the first time you enter, the application will place a marker on the map indicating where your public IP is coming from. To do this two APIs has been used, Leaflet for the map and IP GeoAPI by IPify to locate IP addresses.`,
      technologies: "Angular | Typescript",
      url: "https://ip-address-tracker-jaimediazz.vercel.app/"
    },
    {
      img: "assets/rock-paper-scissors.PNG",
      title: $localize `RockPaperScissors`,
      description: $localize `This web page simulates the popular rock-paper-scissors game, playing against the computer.`,
      technologies: "Angular | Typescript",
      url: "https://rock-paper-scissors-jaimediazz.vercel.app/"
    },
    {
      img: "assets/remote-work.PNG",
      title: $localize `Remote Work`,
      description: $localize `Landing page of a fictitious company that bets on remote work to coordinate and carry out its functions from anywhere in the world.`,
      technologies: "Angular | Typescript",
      url: "https://remote-work-jaimediazz.vercel.app/"
    },
    {
      img: "assets/job-listing.PNG",
      title: $localize `Job Listing`,
      description: $localize `This web page shows a list of 10 jobs, which can be filtered by four different characteristics: role, level, technologies and tools used. To perform this filtering just click on one of the buttons located on the right side of the card. In addition, it has been programmed to work with any initial number of jobs.`,
      technologies: "Angular | Typescript",
      url: "https://job-listing-jaimediazz.vercel.app/"
    },
    {
      img: "assets/TFT.png",
      title: $localize `Final Project`,
      description: $localize `This was my final degree work. The main objective of this project is to provide the Research Unit of the Insular University Hospital Complex Materno-Infantil with a web application for filtering genetic variants that facilitates the detection of those that cause or may cause pathologies in patients, thus being able to prevent them or personalize the treatment received by each of them.`,
      technologies: "Angular | Typescript | Docker",
      url: ""
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
