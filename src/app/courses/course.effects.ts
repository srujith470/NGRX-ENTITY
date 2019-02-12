import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { CourseActionTypes, CourseLoaded, CourseRequested} from './course.actions';
import { CoursesService } from './services/courses.service';
import { map, mergeMap} from "rxjs/operators";

@Injectable()
export class CourseEffects {
    @Effect()
    loadCourse$ = this.actions$
      .pipe(
        ofType<CourseRequested>(CourseActionTypes.CourseRequested),
        mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
        map(course => new CourseLoaded({course})),
  
    );
constructor(private actions$: Actions, private coursesService: CoursesService){}  
}

