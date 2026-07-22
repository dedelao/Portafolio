const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task, index)=>{

        const li = document.createElement("li");

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML = `

            <span>${task.text}</span>

            <div class="actions">

                <button class="complete">

                    ✔

                </button>

                <button class="delete">

                    🗑

                </button>

            </div>

        `;

        li.querySelector(".complete").addEventListener("click", ()=>{

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

            renderTasks();

        });

        li.querySelector(".delete").addEventListener("click", ()=>{

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(li);

    });

}

addButton.addEventListener("click", ()=>{

    const text = input.value.trim();

    if(text === "") return;

    tasks.push({

        text:text,
        completed:false

    });

    input.value = "";

    saveTasks();

    renderTasks();

});

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        addButton.click();

    }

});

renderTasks();