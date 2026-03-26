// Creating Class Task with task name, id, and status (default false)
export class Task {
    constructor(id, title, completed = false) {
        this.id = id
        this.title = title
        this.completed = completed
    }
}