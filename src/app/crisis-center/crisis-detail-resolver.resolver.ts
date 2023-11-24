import { ResolveFn, Router } from '@angular/router';
import { Crisis } from './crisis';
import { inject } from '@angular/core';
import { CirsisService } from './cirsis.service';
import { EMPTY, mergeMap, of } from 'rxjs';

export const crisisDetailResolverResolver: ResolveFn<Crisis> = route => {
  const router = inject(Router);
  const cs = inject(CirsisService);
  const id = parseInt(route.paramMap.get('id')!);
  console.log('crisisDetailResolverResolver ==========', id);
  return cs.getCrisis(id).pipe(
    mergeMap(crisis => {
      if (crisis) {
        return of(crisis);
      } else {
        console.log('crisisDetailResolverResolver ========', id);
        console.log('crisisDetailResolverResolver ========', crisis);
        console.log(2 + 2);
        console.log(100);
        console.log(200);
        router.navigate(['/crisis-center']);
        return EMPTY;
      }
    })
  );
};
