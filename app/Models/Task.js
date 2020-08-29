import { generateId } from "../utils.js";

//TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
export default class Task {
  constructor({title, colorCode, listItems = [], id = ""}) {
    this.title = title
    this.colorCode = colorCode
    this.listItems = listItems
    this.id = id || generateId();
  }

  get Template() {
    return `
    <div class="col mb-3 mx-1">
      <div class="card" style="width: 20rem;">
      <h5 class="card-header text-light d-flex justify-content-between ${this.colorCode}">${this.title}
      <i class="fa fa-times-circle-o" aria-hidden="true" onclick="app.taskController.removeTask('${this.id}')" role="button"></i>
      </h5>
        
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
    this.listItems.forEach(item => { 
      let checkbox = generateId()
      template += `
      <li class="list-group-item d-flex justify-content-between darker-bg no-select"> 
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="${checkbox}">
        <label class="custom-control-label" for="${checkbox}"></label>
        </div>
      ${item} 
        <span> <i class="fa fa-times-circle-o" aria-hidden="true" onclick="app.taskController.removeItem('${this.id}', '${item}')" role="button"></i> </span>
      </li> 
      `});
    return template + ''
  }

}

//Be sure to add the methods needed to create the view template for this model
//For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you