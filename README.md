# EventTrackerProject
##### Week 12 - Homework Project Skill Distillery

### *Overview*

The app will allow the user to track information about their workouts.

For example:
* Name:  Squats
* Weight/Sets/Reps:  3 sets of 10 reps. 1. 245/ 2. 260/ 3. 265
* Day:  Monday
* Date:  11/09/2020
* Location:  24 Hour Fitness
* Description:  The lift felt to easy. Need to raise the weight next time.


This project involved creating a database with a few entries.
Creating a Java entity class and mapping the POJO using JPA.
Configuring a Spring Boot app to publish a REST API.
Using Spring REST annotations.
The user will be able to perform full CRUD operations.
* Create a new workout
* Read a list of past workouts or search by ID/Name/Description/Day/Date
* Update any of the workouts
* Delete any past workouts

Send and receive JSON.

#### *API Endpoints*


| Return Type       | Route                                                       | Functionality                           |
| ----------------- | ----------------------------------------------------------- | --------------------------------------- |
| List <Workout> 	  | GET http://localhost:8085/api/workouts                    	| Gets all workouts                     	|
| Workout       	  | GET http://localhost:8085/api/workouts/{id}            	    | Gets one workout by id                	|
| List <Workout> 	  | GET http://localhost:8085/api/workouts/search             	| Gets workouts by date                 	|
| List <Workout> 	  | GET http://localhost:8085/api/workouts/search/{keyword}   	| Gets workouts by day/name/description 	|
| Workout         	| PUT http://localhost:8085/api/workouts/{id}               	| Update a workout                      	|
| Workout         	| POST http://localhost:8085/api/workouts                   	| Add a workout                         	|
| Void            	| Delete http://localhost:8085/api/workouts/{id}            	| Delete a workout                      	|

#### *Formatting for Posts, Search by date*

```
  {
        "name": "New Lift",
        "description": Was feeling a little light. Need to increase the weight",
        "location": A few hours of fitness,
        "day": "Monday",
        "Date": "11/09/2020s",
        "img": null,
        "weight": "Set 1/10 reps - 200lb, Set 2/10 reps - 220lb, Set 3/10 reps - 230lb"
    }

    Search by date
    11/10/2020
```

#### *Technologies Used*
* AWS
* CRUD
* Git/Github
* Gradle
* Hibernate
* JSON
* Java
* JPA
* JUnit testing
* MAMP
* MySQL
* MySQL Workbench
* Postman
* RESTful API
* Spring Boot
* Spring Data JPA
* Spring Tool Suite


#### *Lessons Learned*
Had the opportunity to become more comfortable with RESTful API.  
Learned important annotations like:
* @Service
* @RequestMapping
* @RestController
* @PathVariable
* @GetMapping
* @PostMapping
* @PutMapping
* @DeleteMapping
