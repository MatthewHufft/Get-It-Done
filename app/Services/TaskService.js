import Task from "../Models/Task.js";
import store from "../store.js";

//Public
class TaskService {
  removeTask(id) {
    store.State.tasks = store.State.tasks.filter(t => t.id != id)
  }
  createTask(rawTask) {
    let newTask = new Task(rawTask);
    store.State.tasks.push(newTask);
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new TaskService();
export default SERVICE;
