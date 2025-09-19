let tasks=[]

//Add Task()
function addTask(task){
    if(task.trim() === "") return
    tasks.push({text: task, completed: false})
    renderTasks()
}

//deleteTask()

function deleteTask(index){
    tasks.splice(index, 1)
    renderTasks()
}

//toggleTask()
function toggleTask(index){
 tasks[index].completed = true

    renderTasks()

}

//renderTasks()

function renderTasks(){
    const tasklist = document.getElementById('tasklist')
    tasklist.innerHTML = ""

    tasks.forEach((task, index) =>{
     const li = document.createElement('li')
     li.className = task.completed ? "completed"  : ""
     li.innerHTML = `<span>${task.text} </span>
     <button onClick="toggleTask(${index})">✅</button>
     <button onClick="deleteTask(${index})">🚮</button>`

   tasklist.appendChild(li)
    })
    taskCount()
}
function taskCount(){
let count = tasks.length;
let completedount =tasks.filter(task => task.completed === true).length
console.log(completedount)
    const countEl = document.getElementById("taskCount")
    countEl.textContent = `ընդհանուր  ${count} ավարտված ${completedount}`
 }


    document.getElementById('taskbutton').addEventListener('click', ()=>{ 
        const input = document.getElementById('taskinput')
        addTask(input.value)
        input.value =""
    })
    document.getElementById("deletTaskBtn").addEventListener('click', () =>{
        tasks.length = 0
        renderTasks()
    })

