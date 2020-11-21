window.addEventListener("load", function () {
  console.log("Script loaded");
  listAllWorkouts();
  init();
});

function init() {
  //   document.workoutForm.lookup.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     var workoutId = document.workoutForm.workoutId.value;
  //     if (!isNaN(workoutId) && workoutId > 0) {
  //       getWorkout(workoutId);
  //     }
  //   });

  document.workoutSearchForm.search.addEventListener("click", function (event) {
    event.preventDefault();
    var keyword = document.workoutSearchForm.workoutKeyword.value;
    getSearchedWorkout(keyword);
  });

  document.addWorkoutForm.addWorkout.addEventListener(
    "click",
    function (event) {
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
    }
  );

  document.updateWorkoutForm.updateWorkout.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      var newWorkout = {};
      newWorkout.id = document.updateWorkoutForm.workoutId.value;
      newWorkout.name = document.updateWorkoutForm.workoutName.value;
      newWorkout.description =
        document.updateWorkoutForm.workoutDescription.value;
      newWorkout.location = document.updateWorkoutForm.workoutLocation.value;
      newWorkout.day = document.updateWorkoutForm.workoutDay.value;
      newWorkout.date = document.updateWorkoutForm.workoutDate.value;
      newWorkout.weight = document.updateWorkoutForm.workoutWeight.value;
      newWorkout.img = document.updateWorkoutForm.workoutImg.value;
      newWorkout.enabled = 1;
      console.log(newWorkout);
      postWorkout(newWorkout);
    }
  );

  // document.deleteWorkoutForm.delete.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     workoutId = document.deleteWorkoutForm.workoutId.value;
  //     if (!isNaN(workoutId) && workoutId > 0) {
  //         deleteWorkout(workoutId);
  //     }
  //   });
}
function workoutTable(workouts) {
  var table = document.createElement("table");
  table.style.border = "solid";
  var head = document.createElement("thead");
  var headTr = document.createElement("tr");
  var headTr2 = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");
  var th6 = document.createElement("th");

  th1.textContent = "ID";
  th2.textContent = "Name";
  th3.textContent = "Date";
  th4.textContent = "";
  th5.textContent = "Number of workouts: ";
  th6.textContent = workouts.length;

  headTr.appendChild(th1);
  headTr.appendChild(th2);
  headTr.appendChild(th3);
  headTr2.appendChild(th4);
  headTr2.appendChild(th5);
  headTr2.appendChild(th6);
  head.appendChild(headTr2);
  head.appendChild(headTr);

  table.appendChild(head);
  var tBody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");

  td1.textContent = workouts.length;
  for (let i = 0; i < workouts.length; i++) {
    // document.workoutForm.lookup.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     var workoutId = document.workoutForm.workoutId.value;
    //     if (!isNaN(workoutId) && workoutId > 0) {
    //         getWorkout(workoutId);
    //     }
    // });

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    //   var td4 = document.createElement('button');

    td1.textContent = workouts[i].id;
    td2.textContent = workouts[i].name;
    td3.textContent = workouts[i].date;
    tr.addEventListener("click", function (event) {
        event.preventDefault();
  
        getWorkout(workouts[i].id);
      });   

    

    td1.style.border = "solid";
    td2.style.border = "solid";
    td3.style.border = "solid";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tr.appendChild(td4);
    tBody.appendChild(tr);
  }
  var dataTableDiv = document.createElement("div");
  // var dataTableDiv = document.getElementById("workoutTable");
  table.appendChild(tBody);
  dataTableDiv.appendChild(table);
  document.body.insertBefore(dataTableDiv, document.body.children[1]);
}

function workoutTableByKeyword(workouts) {
  var table = document.createElement("table");
  table.style.border = "solid";
  var head = document.createElement("thead");
  var headTr = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  // var td4 = document.createElement('button');

  th1.textContent = "ID";
  th2.textContent = "Name";
  th3.textContent = "Date";

  headTr.appendChild(th1);
  headTr.appendChild(th2);
  headTr.appendChild(th3);

  head.appendChild(headTr);
  table.appendChild(head);
  var tBody = document.createElement("tbody");
  for (let i = 0; i < workouts.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.textContent = workouts[i].id;
    td2.textContent = workouts[i].name;
    td3.textContent = workouts[i].date;
    tr.addEventListener("click", function (event) {
        event.preventDefault();
  
        getWorkout(workouts[i].id);
      });   
    td1.style.border = "solid";
    td2.style.border = "solid";
    td3.style.border = "solid";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    //   tr.appendChild(td4);
    tBody.appendChild(tr);
  }
  var dataTableDiv = document.getElementById("tableSearch");
  dataTableDiv.innerHTML = "";
  // var dataTableDiv = document.getElementById("workoutTable");

  table.appendChild(tBody);
  dataTableDiv.appendChild(table);
  // document.body.insertBefore(dataTableDiv, document.body.children[7]);
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

function listAllWorkouts() {
  console.log("listAllWorkouts()");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/workouts/");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let workouts = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(workouts);
        workoutTable(workouts);
      } else {
        console.error("Wokrout not found.");
        displayError("Workout not found.");
      }
    }
  };
  xhr.send();
}

function deleteWorkout(workoutId) {
  console.log("deleteWorkout(): workoutId=" + workoutId);
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "api/workouts/" + workoutId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        console.log(xhr.responseText);
        let h1 = document.createElement("h1");
        h1.textContent = "Workout Was Deleted";
        workoutData.appendChild(h1);
        console.error("Wokrout Deleted");
        var dataDiv = document.getElementById("workoutData");
        dataDiv.textContent = "Workout Was Deleted";
      } else {
        console.error("Wokrout not found.");
        displayError("Workout not found.");
      }
    }
  };
  xhr.send();
}

function getSearchedWorkout(keyword) {
  console.log("getSearchedWorkout(): Keyword=" + keyword);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/workouts/search/" + keyword);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let workouts = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(workouts);
        workoutTableByKeyword(workouts);
      } else {
        console.error("Wokrout not found.");
        displayError("Workout not found.");
      }
    }
  };
  xhr.send();
}

function postWorkout(workout) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/workouts");
  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let workout = "";
        workout = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(workout);
        displayWorkout(workout);
      }
    }
  };
  var newWorkout = JSON.stringify(workout); // Convert JS object to JSON string
  console.log(newWorkout);
  xhr.send(newWorkout);
}

function updateWorkout(workout) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/workouts" + workoutId);
  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let workout = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(workout);
        displayWorkout(workout);
      }
    }
  };
  var updatedWorkout = JSON.stringify(workout); // Convert JS object to JSON string
  console.log(updatedWorkout);
  xhr.send(updatedWorkout);
}

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
  li.textContent = "Workout ID: " + workout.id;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = "Location: " + workout.location;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = "Day of the Workout: " + workout.day;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = "Workout Date: " + workout.date;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = "Sets/Reps/Weight: " + workout.weight;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = workout.img;
  ul.appendChild(li);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  dataDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    deleteWorkout(workout.id);
  });

  dataDiv.appendChild(ul);
  dataDiv.appendChild(deleteButton);
}

function displayListOfWorkouts(workouts) {
  var dataDiv = document.getElementById("workoutData");
  dataDiv.textContent = "";

  var ul = document.createElement("ul");
  for (var i = 0; i < workouts.length; i++) {
    var workout = workouts[i];
    var li = document.createElement("li");
    li.textContent = workout.name;
    ul.appendChild(li);
  }
  dataDiv.appendChild(ul);
}
