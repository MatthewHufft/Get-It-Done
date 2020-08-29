import Task from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  tasks: [
    new Task({ title: "Grocery List", colorCode: "bg-primary", listItems: ["Milk", "Eggs", "Cheese"]}),
    new Task({ title: "Chores", colorCode: "bg-danger", listItems: ["Dishes", "Sweep", "Bathe Dog" ]}),
    new Task({ title: "Goals", colorCode: "bg-info", listItems: ["Become a software developer", "Backpack through every country", "Retire in 40's"]}),
    new Task({ title: "Cars I want", colorCode: "bg-warning", listItems: ["Nissan GTR", "Pagani Huayra", "Mercedes Benz AMG S63"]})
  ]
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.tasks = data.tasks.map(l => new Task(l));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
