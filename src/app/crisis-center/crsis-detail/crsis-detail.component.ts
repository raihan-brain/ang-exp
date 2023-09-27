import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CirsisService } from '../cirsis.service';

@Component({
  selector: 'app-crsis-detail',
  templateUrl: './crsis-detail.component.html',
  styleUrls: ['./crsis-detail.component.scss'],
})
export class CrsisDetailComponent implements OnInit {
  private editName: string | undefined;
  crisis: Crisis | undefined;
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

  ngOnInit() {
    this.route.data.subscribe(data => {
      const crisis: Crisis = data['crisis'];
      this.editName = crisis.name;
      this.crisis = crisis;
    });
  }
}
