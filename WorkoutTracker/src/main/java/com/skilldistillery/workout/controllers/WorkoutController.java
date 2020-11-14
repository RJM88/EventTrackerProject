package com.skilldistillery.workout.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
