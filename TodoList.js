// created Class ToDoList 
export class ToDoList {
    constructor() {
        this.tasks = []
    }
    // Add task
    addTask(task) {
        this.tasks.push(task)
        }
    // List all tasks
    listTasks() {
        return this.tasks
    }
}