import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../crisis';
import { CirsisService } from '../cirsis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crsis-center-home',
  templateUrl: './crsis-center-home.component.html',
  styleUrls: ['./crsis-center-home.component.scss'],
})
export class CrsisCenterHomeComponent implements OnInit {
  crises$!: Observable<Crisis[]>;
  selectedCrisisId = 0;
  constructor(
    private crisisService: CirsisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedCrisisId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises();
      })
    );
  }
}
