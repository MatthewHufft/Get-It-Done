import TaskService from "../Services/TaskService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawTasks() {
  let template = ''
  store.State.tasks.forEach(Task => template += Task.Template)
  document.getElementById('taskSection').innerHTML = template
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
      title: form.title.value,
    }
    TaskService.createTask(rawTask);
    _drawTasks();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
