package com.skilldistillery.workout.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.WorkoutRepository;
@Service
public class WorkoutServiceImpl implements WorkoutService{
	@Autowired
	private WorkoutRepository repo;

	@Override
	public List<Workout> getAllWorkouts() {
		return null;

	}

}
