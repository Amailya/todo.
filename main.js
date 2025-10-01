let tasks=[]

// ✅ Add Task
function addTask(task){
    if(task.trim() === "") return
    const now = new Date()
    const dateTime = now.toLocaleString("hy-AM", { 
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit", 
        hour: "2-digit", 
        minute: "2-digit" 
    })

    tasks.push({text: task, completed: false, createdAt: dateTime})
    renderTasks()
}

// 🗑️ Delete Task
function deleteTask(index){
    tasks.splice(index, 1)
    renderTasks()
}

// 🔄 Toggle Task (avartvac ↔ chi avartvac)
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed
    renderTasks()
}

// ✏️ Edit Task
function editTask(index){
    const newName = prompt("Նոր անուն գրիր:", tasks[index].text)
    if(newName !== null && newName.trim() !== ""){
        tasks[index].text = newName.trim()
        renderTasks()
    }
}

// 🎨 Render Tasks
function renderTasks(){
    const tasklist = document.getElementById('tasklist')
    tasklist.innerHTML = ""

    // 📌 Sort → 
    tasks.sort((a, b) => a.completed - b.completed)

    tasks.forEach((task, index) =>{
        const li = document.createElement('li')
        li.className = task.completed ? "completed"  : ""
        li.innerHTML = `
            <div style="flex:1">
              <span>${task.text}</span>
              <small style="display:block; font-size:11px; color:#555;">${task.createdAt}</small>
            </div>
            <div>
              <button onClick="toggleTask(${index})">✅</button>
              <button onClick="editTask(${index})">✏️</button>
              <button onClick="deleteTask(${index})">🚮</button>
            </div>
        `
        tasklist.appendChild(li)
    })

    taskCount()
}

// 📊 Task Count
function taskCount(){
    let count = tasks.length
    let completedCount = tasks.filter(task => task.completed === true).length
    const countEl = document.getElementById("taskCount")
    countEl.textContent = `ընդհանուր ${count} | ավարտված ${completedCount}`
}

// 🎯 Events
document.getElementById('taskbutton').addEventListener('click', ()=>{ 
    const input = document.getElementById('taskinput')
    addTask(input.value)
    input.value =""
})

document.getElementById("deletTaskBtn").addEventListener('click', () =>{
    tasks.length = 0
    renderTasks()
})