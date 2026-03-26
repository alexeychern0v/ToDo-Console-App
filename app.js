import { Task } from "./Task.js";
import { ToDoList } from "./TodoList.js";

const task1 = new Task(1, 'Buy Milk')
const task2 = new Task(2, 'Learn JS')
const list1 = new ToDoList()

list1.addTask(task1)
list1.addTask(task2)
console.log(list1.listTasks())
list1.deleteTask(1)
console.log(list1.listTasks())
list1.completeTask(2)
console.log(list1.listTasks())