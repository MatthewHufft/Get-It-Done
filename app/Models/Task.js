import { generateId } from "../utils.js";

//TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
export default class Task {
  constructor({title, color, listItems = [], id = ""}) {
    this.title = title
    this.color = color
    this.listItems = listItems
    this.id = id || generateId();
  }

  get Template() {
    return `
    <div class="col-2">
      <div class="card" style="width: 18rem;">
        <i class="fa fa-times-circle-o d-flex align-self-end m-2" aria-hidden="true" onclick="app.taskController.removeTask('${this.id}')" role="button"></i>
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">This will eventually be an optional, toggleable, description section</p>
        </div>
        <form onsubmit="app.taskController.createItem('${this.id}')">
          <input type="text" class="form-control" placeholder="Add list item + Enter" name="listItemInput" >
        </form>
        <ul class="list-group">
          ${this.ListItemsTemplate}
        </ul>
      </div>
    </div>
    `

  }

  get ListItemsTemplate() {
    let template = ''
    this.listItems.forEach(item => { template += `
      <li class="list-group-item d-flex justify-content-between"> 
        ${item} 
        <span> <i class="fa fa-times-circle-o" aria-hidden="true" onclick="app.taskController.removeItem('${this.id}', '${item}')" role="button"></i> </span>
      </li> 
      `});
    return template + ''
  }

}

//Be sure to add the methods needed to create the view template for this model
//For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you