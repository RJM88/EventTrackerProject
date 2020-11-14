package com.skilldistillery.workout.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	@Autowired
	private WorkoutRepository repo;

	@Override
	public List<Workout> getAllWorkouts() {
		return repo.findAll();

	}

	@Override
	public Workout addWorkout(Workout workout) {
		repo.saveAndFlush(workout);
		return workout;

	}

	@Override
	public boolean deleteWorkouts(Integer id) {
		boolean deleted = false;
		Optional<Workout> workoutOpt = repo.findById(id);
		if (workoutOpt.isPresent()) {
			Workout workout = workoutOpt.get();
			if (workout.getId() == id) {
				repo.deleteById(id);
				deleted = true;
			}
		}
		return deleted;

	}

	@Override
	public Workout update(Integer id, Workout workout) {
		Optional<Workout> workoutOpt = repo.findById(id);
		Workout managedWorkout = null;
		if (workoutOpt.isPresent()) {
			managedWorkout = workoutOpt.get();
			if (workout.getName() != null) {
				managedWorkout.setName(workout.getName());
			}
			if (workout.getDay() != null) {
				managedWorkout.setDay(workout.getDay());
			}
			if (workout.getDiscription() != null) {
				managedWorkout.setDiscription(workout.getDiscription());
			}
			if (workout.getImg() != null) {
				managedWorkout.setImg(workout.getImg());
			}
			if (workout.getLocation() != null) {
				managedWorkout.setLocation(workout.getLocation());
			}
			if (workout.getWeight() != null) {
				managedWorkout.setWeight(workout.getWeight());
			}

		}
		repo.flush();
		return managedWorkout;
	}
}
