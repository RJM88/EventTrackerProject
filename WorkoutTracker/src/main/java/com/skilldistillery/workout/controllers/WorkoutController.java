package com.skilldistillery.workout.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.WorkoutService;

@RequestMapping("api")
@RestController
public class WorkoutController {

	@Autowired
	private WorkoutService svc;

	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}

	@GetMapping("workouts")
	public List<Workout> listAllWorkout() {
		return svc.getAllWorkouts();
	}

	@PostMapping("workouts")
	public Workout addWorkout(@RequestBody Workout workout, HttpServletResponse response, HttpServletRequest request) {
		workout = svc.addWorkout(workout);
		if (workout == null) {
			response.setStatus(404);
		} else {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(workout.getId());
			response.setHeader("Location", url.toString());
		}
		return workout;
	}

	@DeleteMapping("workouts/{id}")
	public void deleteWorkouts(@PathVariable Integer id, HttpServletResponse response, HttpServletRequest request) {
		try {
			if (svc.deleteWorkouts(id)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			response.setStatus(400);
		}
	}
	
	@PutMapping("workouts/{id}")
	public Workout updateWorkout(@PathVariable Integer id, @RequestBody Workout workout, HttpServletResponse response) {
		try {
			workout = svc.update(id, workout);
			if (workout == null) {
				response.setStatus(404);
				workout = null;
			}
		} catch (Exception e) {
			response.setStatus(400);
			workout = null;
		}
		return workout;
	}
}