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
    let confirm = swal({
  title: "Are you sure?",
  text: "You will not be able to recover this task!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your task has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your task is safe!");
  }
});
    if(confirm) {
      TaskService.removeTask(id);
      _drawTasks();
    } else {
      return;
    }
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

