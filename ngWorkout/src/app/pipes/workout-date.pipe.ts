import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../models/workout';

@Pipe({
  name: 'workoutDate'
})
export class WorkoutDatePipe implements PipeTransform {

  transform(workouts: Workout[], workoutDate: string): Workout[] {
    const results = [];
    if(workoutDate === 'all'){
      return workouts;
    }
    workouts.forEach((workout) => {
        if (workout.day === workoutDate) {
          results.push(workout);
        }
        console.log(workout);
      });
    return results;
  }
}
