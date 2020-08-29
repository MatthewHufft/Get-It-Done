import TaskService from "../Services/TaskService.js";
import store from "../store.js";


function _drawTasks() {
  let template = ''
  store.State.tasks.forEach(Task => template += Task.Template)
  document.getElementById('taskSection').innerHTML = template
  TaskService.saveState();
}


//Public
export default class TaskController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the Tasks.
    _drawTasks(); 
  }
  
  createTask(event) {
    event.preventDefault();
    let form = event.target
    let rawTask = {
      title: form.titleOfTask.value,
      colorCode: form.colorCode.value
    }
    TaskService.createTask(rawTask);
    _drawTasks();
  }

  removeTask(id) {
    TaskService.removeTask(id);
    _drawTasks();
  }

  createItem(id){
    event.preventDefault();
    let form = event.target;
    // @ts-ignore
    let rawItem = form.listItemInput.value;
    TaskService.createItem(rawItem, id);
    _drawTasks();
    }

    removeItem(id, name) {
      console.log(id, name)
      TaskService.removeItem(id, name);
      _drawTasks();
    }

    

  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems

