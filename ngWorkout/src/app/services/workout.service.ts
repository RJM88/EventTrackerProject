// import { WorkoutService } from './workout.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Workout } from './../models/workout';

@Injectable({
  providedIn: 'root',
})

export class WorkoutService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8085/';
  url = this.baseUrl + 'api/workouts';
  workouts: Workout[] = [];
  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  index(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(workout: Workout) {
    console.log(workout);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.workouts.push(workout);
    // this.http.post('/api/workouts')
    return this.http.post<any>(this.url, workout, httpOptions)
    .pipe(catchError(this.handleError));
  }
  update(workout: Workout) {
  // update(id: number, workout: Workout) {
    console.log(workout);

    console.log(workout.id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // this.http.post('/api/workouts')
    return this.http.put<any>(this.url +'/'+ workout.id, workout, httpOptions)
    .pipe(catchError(this.handleError));
  }


  destroy(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.delete<any>(this.url +'/'+ id, httpOptions)
  }
  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
  }
}
