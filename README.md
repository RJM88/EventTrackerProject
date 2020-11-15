# EventTrackerProject
##### Week 12 - Homework Project Skill Distillery

### Overview
The app will allow the user to track information about their workouts. 

For example:
* Name:  Squats
* Weight/Sets/Reps:  3 sets of 10 reps. 1. 245/ 2. 260/ 3. 265
* Day:  Monday
* Date:  11/09/2020
* Location:  24 Hour Fitness
* Description:  Lift felt to easy. Need to raise the weight next time.
	
The user will beable to perform full CRUD operations. 
* Create a new workout
* Read a list of past workouts or search by ID/Name/Description/Day/Date
* Update any of the workouts
* Delete any past workouts

#### API Endpoints


| Return Type | Route | Functionality |
| --- | --- | --- |
| List<Workout> 	| GET api/workouts                  	| Gets all workouts                     	|
| Workout       	| GET api/workouts/{id}             	| Gets one workout by id                	|
| List<Workout> 	| GET api/workouts/search           	| Gets workouts by date                 	|
| List<Workout> 	| GET api/workouts/search/{keyword} 	| Gets workouts by day/name/description 	|
| Workout       	| PUT api/workouts/{id}             	| Update a workout                      	|
| Workout       	| POST api/workouts                 	| Add a workout                         	|
| Void          	| Delete api/workouts/{id}          	| Delete a workout                      	|


#### *Technologies Used*
* AWS
* GIT
* Gradle
* Java
* JPA
* MAMP
* MySQL
* MySQL Workbench
* Postman
* REST API
* Spring Tool Suite 


#### Lessons Learned
Becoming more comfortable with RESTful API.  