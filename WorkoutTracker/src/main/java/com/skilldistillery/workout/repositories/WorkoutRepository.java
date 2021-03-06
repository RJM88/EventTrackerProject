package com.skilldistillery.workout.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {

	List<Workout> findByNameLikeOrDescriptionLikeOrDayLike(String nameKey, String disKey, String dayKey);

	List<Workout> findByDateLike(String dateKey);

}
