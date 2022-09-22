import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  cvPath: string = $localize `assets/CV_Jaime_Díaz_en.pdf`;
  
}
