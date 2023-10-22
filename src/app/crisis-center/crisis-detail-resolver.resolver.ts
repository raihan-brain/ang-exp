import { ResolveFn, Router } from '@angular/router';
import { Crisis } from './crisis';
import { inject } from '@angular/core';
import { CirsisService } from './cirsis.service';
import { EMPTY, mergeMap, of } from 'rxjs';

export const crisisDetailResolverResolver: ResolveFn<Crisis> = (
  route,
  state
) => {
  const router = inject(Router);
  const cs = inject(CirsisService);
  const id = parseInt(route.paramMap.get('id')!);
  console.log('crisisDetailResolverResolver', id);
  return cs.getCrisis(id).pipe(
    mergeMap(crisis => {
      if (crisis) {
        return of(crisis);
      } else {
        router.navigate(['/crisis-center']);
        return EMPTY;
      }
    })
  );
};