import { ToDoList } from "./TodoList.js";


const list1 = new ToDoList()
list1.loadTasks()

const command = process.argv[2]
const value = process.argv[3]

switch (command) {
    case 'add':
        list1.addTask(value)
        console.log('Task added!')
        break

    case 'list':
        console.log(list1.listTasks())
        break

    case 'complete':
        list1.completeTask(value)
        console.log('Task completed!')
        break

    case 'delete':
        list1.deleteTask(value)
        console.log('Task deleted!')
        break

    default:
        console.log('Unknown command. Use add / delete / complete / list commands.')
}