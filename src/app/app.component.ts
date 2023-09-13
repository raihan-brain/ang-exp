import {Component, OnInit} from '@angular/core';
import {ScreenSizeService} from "./common-service/screen-size.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  menuActive = false;
  screenSize: string = "";
  title = 'ang_exp';

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.getScreenSize$().subscribe(size => {
      this.screenSize = size;
    });
  }

  onMenuButtonClick() {
    console.log("==== fired====")
    this.menuActive = true;
  }

  onMaskClick() {
    this.menuActive = false;
  }
}
