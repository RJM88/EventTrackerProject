window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});

function init() {
  document.workoutForm.lookup.addEventListener("click", function (event) {
    event.preventDefault();
    var workoutId = document.workoutForm.workoutId.value;
    if (!isNaN(workoutId) && workoutId > 0) {
      getWorkout(workoutId);
    }
  });
      document.workoutSearchForm.search.addEventListener("click", function (event) {
          event.preventDefault();
          var keyword = document.workoutSearchForm.workoutKeyword.value;
          getSearchedWorkout(keyword);
        });

        document.addWorkoutForm.addWorkout.addEventListener('click', function(event) {
            event.preventDefault();
            var newWorkout = {};
            newWorkout.name = document.addWorkoutForm.workoutName.value;
            newWorkout.description = document.addWorkoutForm.workoutDescription.value;
            newWorkout.location = document.addWorkoutForm.workoutLocation.value;
            newWorkout.day = document.addWorkoutForm.workoutDay.value;
            newWorkout.date = document.addWorkoutForm.workoutDate.value;
            newWorkout.weight = document.addWorkoutForm.workoutWeight.value;
            newWorkout.img = document.addWorkoutForm.workoutImg.value;
            newWorkout.enabled = 1;
            console.log(newWorkout);
            postWorkout(newWorkout);
            });
    }

function getWorkout(workoutId) {
  console.log("getWorkout(): workoutId=" + workoutId);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/workouts/" + workoutId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let workout = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(workout);
        displayWorkout(workout);
      } else {
        console.error("Wokrout not found.");
        displayError("Workout not found.");
      }
    }
  };
  xhr.send();
}

// function getSearchedWorkout(keyword) {
//   console.log("getSearchedWorkout(): Keyword=" + keyword);
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "api/workouts/search/" + keyword);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let workout = JSON.parse(xhr.responseText);
//         console.log(xhr.responseText);
//         console.log(workout);
//         displayWorkout(workout);
//       } var workout = JSON.parse(xhr.responseText);
//       let workoutUL = document.createElement('ul');
//       workoutUL.style.listStyleType = 'circle';
//       for (let i = 0; i < workout.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = workout[i].name + " " + workout[i].date;
//         workoutUL.appendChild(li);
//       }
//         dataDiv.appendChild(actorUl);
//     }
//       }
//       xhr.send();
//   };

function postWorkout(workout) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/workouts');
    xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 201) {
          let film = JSON.parse(xhr.responseText);
          displayWorkout(workout);
          console.log(workout.name);
        } 
    }    
    };
    var newWorkout = JSON.stringify(workout); // Convert JS object to JSON string
    console.log(newWorkout);
    xhr.send(newWorkout);
  };


function displayError(msg) {
  let div = document.getElementById("workoutData");
  div.textContent = msg;
}
function displayWorkout(workout) {
  var dataDiv = document.getElementById("workoutData");
  dataDiv.textContent = "";
  let h1 = document.createElement("h1");
  h1.textContent = workout.name;
  dataDiv.appendChild(h1);
  let bq = document.createElement("blockquote");
  bq.textContent = workout.description;
  dataDiv.appendChild(bq);
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.textContent = workout.location;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = workout.day;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = workout.date;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = workout.weight;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = workout.img;
  ul.appendChild(li);
  dataDiv.appendChild(ul);
}
