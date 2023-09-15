import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScreenSizeService } from '../../common-service/screen-size.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();
  showButton = false;
  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.getScreenSize$().subscribe(size => {
      this.showButton = size === 'xs' || size === 'sm';
    });
  }

  onMenuButtonClick(event: Event) {
    console.log('===== clicked ===');
    this.menuButtonClick.emit();
    event.preventDefault();
  }
}
