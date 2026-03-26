import fs from 'fs'
import { Task } from './Task.js'


// created Class ToDoList 
export class ToDoList {
    constructor() {
        this.tasks = []
    }
    
    // Load Tasks from tasks.json file
    loadTasks() {
        try {
            const data = fs.readFileSync('./tasks.json', 'utf-8')
            this.tasks = JSON.parse(data)
        } catch (error) {
            this.tasks = []
        }
    }

    // Save Tasks to tasks.json file
    saveTasks() {
        fs.writeFileSync('./tasks.json', JSON.stringify(this.tasks, null, 2), 'utf-8')
    }

    // Get IDs for new tasks 
    getNextId() {
        // id = 1 if no tasks created
        if (this.tasks.length === 0) {
            return 1
        }
        const ids = this.tasks.map((task) => task.id) // arrays of ids of created tasks
        const maxId = Math.max(...ids) // get max id possible from ids of created tasks
        return maxId + 1 // +1 to make new id 
    }

    // Add task
    addTask(title) {
        const id = this.getNextId() // get id for new task
        const newTask = new Task(id, title) // create task with it's id and title
        this.tasks.push(newTask) // push created task to array
        this.saveTasks()
    }

    // List all tasks
    listTasks() {
        return this.tasks
    }

    // Change task status to TRUE (use id to find a task)
    completeTask(id) {
        id = Number(id) 
        const task = this.tasks.find((task) => task.id === id)

        if (task) {
            task.completed = true
        }
        this.saveTasks()
    }

    // Delete task (use id to find a task)
    deleteTask(id) {
        id = Number(id) 
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks()
    }
}