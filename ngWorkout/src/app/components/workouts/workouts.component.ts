import { WorkoutService } from './../../services/workout.service';
import { Workout } from './../../models/workout';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  constructor(private workoutServ: WorkoutService) {}
  workouts: Workout[] = [];
  selected: Workout = null;
  selectedAdd: Workout = null;
  title = 'ngWorkout';
  display = true;
  updateWorkout =  new Workout();
  newWorkout = new Workout();
  public isCollapsed = false;

  ngOnInit(): void {
    this.loadWorkout();
  }

  loadWorkout(): void {
    this.workoutServ.index().subscribe(
      (data) => {
        this.workouts = data;
        console.log(this.workouts);
      },
      (err) => {
        console.error('WorkoutComponent.LoadWorkout(); retrive failed');
      }
    );
  }
  addWorkout(addNewWorkout: NgForm) {
    console.log(addNewWorkout.value);
    this.workoutServ.create(addNewWorkout.value).subscribe(
      (data) => {
        this.loadWorkout();
      },
      (err) => console.error('Observer got an error: ' + err)
    );
    this.workoutServ.index().subscribe(
      (data) => {
        this.workouts = data;
        console.log(this.workouts);
      },
      (err) => {
        console.error('WorkoutComponent.LoadWorkout(); retrive failed');
      }
    );
    this.newWorkout = new Workout();
    console.log('workout created!+++++++++++++++');
  }

  workoutUpdate(updateWorkoutForm: NgForm) {
    console.log(updateWorkoutForm.value);
    // console.log(updateWorkout.value);
    this.workoutServ.update(updateWorkoutForm.value).subscribe(
    // this.workoutServ.update(updateWorkoutForm.value.id, updateWorkoutForm.value).subscribe(
      (data) => {
        this.loadWorkout();
      },
      (err) => console.error('Observer got an error: ' + err)
    );
    this.workoutServ.index().subscribe(
      (data) => {
        this.workouts = data;
        console.log(this.workouts);
      },
      (err) => {
        console.error('WorkoutComponent.LoadWorkout(); retrive failed');
      }
    );
    this.updateWorkout = new Workout();
    console.log('workout UPdate!+++++++++++++++');
    this.selected = null;
  }

  deleteWorkout(workout: Workout) {
    this.workoutServ.destroy(workout.id).subscribe(
      (data) => {
        this.loadWorkout();
      },
      (err) => console.error('Observer got an error: ' + err)
    );
    this.workoutServ.index().subscribe(
      (data) => {
        this.workouts = data;
        console.log(this.workouts);
      },
      (err) => {
        console.error('WorkoutComponent.LoadWorkout(); retrive failed');
      }
    );
  }
}
