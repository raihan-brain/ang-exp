import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from './common-service/screen-size.service';
import { initFlowbite } from 'flowbite';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuActive = false;
  screenSize = '';
  title = 'ang_exp';
  loggedInStatus = false;

  constructor(
    private screenSizeService: ScreenSizeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.screenSizeService.getScreenSize$().subscribe(size => {
      this.screenSize = size;
    });
    this.authService.booleanProperty$.subscribe(status => {
      this.loggedInStatus = status;
    });
    initFlowbite();
  }

  onMenuButtonClick() {
    console.log('==== fired====');
    this.menuActive = true;
  }

  onMaskClick() {
    this.menuActive = false;
  }
}
