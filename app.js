import { ToDoList } from "./TodoList.js";


const toDoList = new ToDoList()
toDoList.loadTasks()

const command = process.argv[2]
const value = process.argv[3]

switch (command) {
    case 'help':
        console.log('============================')
        console.log('        TODO APP HELP       ')
        console.log('============================')
        console.log('⚙️  ​Commands:')
        console.log('       add "task title"      Add a new task')
        console.log('       list                  Show all tasks')
        console.log('       complete <id>         Mark task as completed')
        console.log('       delete <id>           Delete task')
        console.log('       help                  Show help menu')
        console.log('')
        console.log('🔮​ Examples:')
        console.log('       node app.js add "Buy milk"')
        console.log('       node app.js list')
        console.log('       node app.js complete 2')
        console.log('       node app.js delete 2')
        break
    case 'add':
        if (!value || !value.trim()) {
            console.log('❌​ Enter task name.')
            break
        }
        toDoList.addTask(value)
        console.log(`✅​ Task ${value} added!`)
        break

    case 'list':
        const tasks = toDoList.listTasks()
        if (tasks.length === 0) {
            console.log('ℹ️​ No tasks found. Create new one now!')
            break
        }
        console.log(' 📋​---- Tasks to do: ----📋​ ')
        tasks.forEach((task) => {
            const status = task.completed ? 'completed' : 'pending'
            console.log(`${task.id}. ${task.title} - ${status}`)
        })
        break

    case 'complete':
        if (!value) {
            console.log('❌​ Enter task id to complete.')
            break
        }
        toDoList.completeTask(value)
        console.log(`✅​ Task ${value} completed!`)
        break

    case 'delete':
        if (!value) {
            console.log('❌​ Enter task id to delete.')
            break
        }
        toDoList.deleteTask(value)
        console.log(`✅​ Task ${value} deleted!`)
        break

    default:
        console.log('❓ Unknown command. Use "help" to see list of commands.')
}