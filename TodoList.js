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

    // Change task status to TRUE (use id to find a task)
    completeTask(id) {
        const task = this.tasks.find((task) => task.id === id)

        if (task) {
            task.completed = true
        }
    }

    // Delete task (use id to find a task)
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
}