package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutService {

	List<Workout> getAllWorkouts();

	List<Workout> findByNameLikeOrDescriptionLikeOrDayLike(String keyword);

	List<Workout> findByDateLike(String keyword);

	Workout findById(Integer id);

	Workout addWorkout(Workout workout);

	Workout update(Integer id, Workout workout);

	boolean deleteWorkouts(Integer id);

}
