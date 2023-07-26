document.addEventListener('DOMContentLoaded', function () {
    let taskInput = document.getElementById("text");
    let btn = document.getElementsByClassName("btn")[0];
    let taskList = document.getElementsByClassName("lists")[0];

    btn.addEventListener('click', addTask);

    function addTask() {
        if (taskInput.value.trim() === "") {
            alert("You must add a task!");
        } else {
            let li = document.createElement("li");
            li.innerText = taskInput.value;
            taskList.appendChild(li);

            // Add a close button (span) to remove tasks
            let span = document.createElement("span");
            span.innerText = "\u00d7";
            li.appendChild(span);

            taskInput.value = "";
            saveData();
        }
    }

    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", taskList.innerHTML);
    }

    function showTask() {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            taskList.innerHTML = savedData;
        }
    }
    showTask();
});

