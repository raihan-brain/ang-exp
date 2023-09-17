import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Crisis } from '../crisis';
import { CirsisService } from '../cirsis.service';

@Component({
  selector: 'app-crsis-detail',
  templateUrl: './crsis-detail.component.html',
  styleUrls: ['./crsis-detail.component.scss'],
})
export class CrsisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisService: CirsisService
  ) {}
  goToCrisis(crisisID: number) {
    this.router.navigate(['../', { id: crisisID, foo: 'foo' }], {
      relativeTo: this.route,
    });
    // console.log('working on it');
  }

  ngOnInit(): void {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.crisisService.getCrisis(parseInt(params.get('id')!));
      })
    );
  }
}
