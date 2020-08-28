import TaskController from "./Controllers/TaskController.js";

//NOTE This should be good to go
class App {
  taskController = new TaskController();
}

window["app"] = new App();
