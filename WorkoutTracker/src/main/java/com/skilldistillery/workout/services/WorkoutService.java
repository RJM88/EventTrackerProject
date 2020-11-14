package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Workout;


public interface WorkoutService {

	List<Workout> getAllWorkouts();
	
	Workout addWorkout(Workout workout);
	
	boolean deleteWorkouts(Integer id);
	
	Workout update(Integer id, Workout workout);




}
