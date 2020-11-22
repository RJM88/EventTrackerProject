window.addEventListener("load", function () {
  console.log("Script loaded");
  listAllWorkouts();
  init();
});

function init() {
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
    tBody.appendChild(tr);
  }
  var dataTableDiv = document.createElement("div");
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
    tBody.appendChild(tr);
  }
  var dataTableDiv = document.getElementById("tableSearch");
  dataTableDiv.innerHTML = "";
  table.appendChild(tBody);
  dataTableDiv.appendChild(table);
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
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let workout = "";
        updatedWorkout = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(updatedWorkout);
        displayWorkout(updatedWorkout);
      }
    }
  };
  var newWorkout = JSON.stringify(workout);
  console.log(newWorkout);
  xhr.send(newWorkout);
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
  dataDiv.appendChild(ul);

  var updatedWorkoutForm = document.createElement("form");

  var workoutId = document.createElement("input");
  workoutId.name = "id";
  workoutId.type = "text";
  workoutId.value = workout.id;
  updatedWorkoutForm.appendChild(workoutId);

  var workoutName = document.createElement("input");
  workoutName.id = "name";
  workoutName.name = "name";
  workoutName.type = "text";
  workoutName.textContent = workout.name;
  updatedWorkoutForm.appendChild(workoutName);

  var workoutDescription = document.createElement("input");
  workoutDescription.name = "description";
  workoutDescription.type = "text";
  workoutDescription.value = workout.description;
  updatedWorkoutForm.appendChild(workoutDescription);

  var workoutLocation = document.createElement("input");
  workoutLocation.name = "workoutLocation";
  workoutLocation.type = "text";
  workoutLocation.value = workout.location;
  updatedWorkoutForm.appendChild(workoutLocation);

  var workoutDay = document.createElement("input");
  workoutDay.name = "workoutDay";
  workoutDay.type = "text";
  workoutDay.value = workout.day;
  updatedWorkoutForm.appendChild(workoutDay);

  var workoutDate = document.createElement("input");
  workoutDate.name = "workoutDate";
  workoutDate.type = "text";
  workoutDate.value = workout.date;
  updatedWorkoutForm.appendChild(workoutDate);

  var workoutWeight = document.createElement("input");
  workoutWeight.name = "workoutWeight";
  workoutWeight.type = "text";
  workoutWeight.value = workout.weight;
  updatedWorkoutForm.appendChild(workoutWeight);

  var workoutImg = document.createElement("input");
  workoutImg.name = "workoutImg";
  workoutImg.type = "text";
  workoutImg.value = workout.img;
  updatedWorkoutForm.appendChild(workoutImg);

  var submit = document.createElement("button");
  submit.name = "submit";
  submit.type = "submit";
  submit.innerHTML = "update";
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    var newUpdatedWorkout = {};
    newUpdatedWorkout.id = workout.id;
      newUpdatedWorkout.name = updatedWorkoutForm.name.value;
      newUpdatedWorkout.description = updatedWorkoutForm.description.value;
      newUpdatedWorkout.location = updatedWorkoutForm.workoutLocation.value;
      newUpdatedWorkout.day = updatedWorkoutForm.workoutDay.value;
      newUpdatedWorkout.date = updatedWorkoutForm.workoutDate.value;
      newUpdatedWorkout.weight = updatedWorkoutForm.workoutWeight.value;
      newUpdatedWorkout.img = updatedWorkoutForm.workoutImg.value;
      newUpdatedWorkout.enabled = 1;
      console.log(newUpdatedWorkout);
    updateWorkout(newUpdatedWorkout);
  });
  dataDiv.appendChild(updatedWorkoutForm);
  dataDiv.appendChild(submit);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  dataDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    deleteWorkout(workout);
  });
  dataDiv.appendChild(deleteButton);
}

function updateWorkout(workout) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/workouts/" + workout.id);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let newUpdatedWorkout = "";
        newUpdatedWorkout = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        displayWorkout(newUpdatedWorkout);
      }
    }
  };
  newUpdatedWorkout = JSON.stringify(workout);
  xhr.send(newUpdatedWorkout);
  console.log(workout.name);
  console.log(newUpdatedWorkout);
}
