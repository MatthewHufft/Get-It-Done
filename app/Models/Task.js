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
    <div class="card" style="width: 18rem;">
    <i class="fa fa-times-circle-o d-flex align-self-end m-2" aria-hidden="true" onclick="app.taskController.removeTask('${this.id}')" role="button"></i>
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">This will eventually be an optional, toggleable, description section</p>
    </div>
    ${this.ListItemsTemplate}
  </div>
    `

  }

  get ListItemsTemplate() {
    let template = '<ul class="list-group list-group-flush">'
    this.listItems.forEach(item => { template += `<li class="list-group-item">${item}</li>`});
    return template + '</ul>'
  }

}

//Be sure to add the methods needed to create the view template for this model
//For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you