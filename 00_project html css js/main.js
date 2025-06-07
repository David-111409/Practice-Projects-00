const list = document.querySelector("ul#task-list");
const inputValue = document.querySelector("input#input-task");
const but = document.querySelector("button#btn");

// 🔁 Attach event listeners to each <li> and <span>
function attachEventListeners() {
    const lis = document.querySelectorAll("#task-list li");
    const crosses = document.querySelectorAll("#task-list li span");

    lis.forEach(li => {
        li.onclick = function () {
            this.classList.toggle("completed");
            setTask();
        };
    });

    crosses.forEach(cross => {
        cross.onclick = function (e) {
            e.stopPropagation(); // prevent li's onclick
            this.parentElement.remove();
            setTask();
        };
    });
}

function addTask() {
    const val = inputValue.value.trim();
    if (val) {
        const task = document.createElement("li");
        task.innerHTML = `${val} <span>&times;</span>`;
        list.appendChild(task);
        inputValue.value = "";
        setTask();
        attachEventListeners();
    }
}

// 💾 Save tasks
function setTask() {
    localStorage.setItem("tasks", list.innerHTML);
}

// 🔁 Load tasks from localStorage and attach events
function loadTask() {
    list.innerHTML = localStorage.getItem("tasks") || "";
    attachEventListeners();
}

// ▶️ Event listeners
but.onclick = addTask;
inputValue.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// 🔁 On page load
loadTask();
