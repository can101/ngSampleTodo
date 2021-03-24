export class Model{
  user;
  items;
  constructor(){
  this.user="Can";
  this.items = [
     new TodoItem("spor",true),
    new TodoItem("kahvalti", false),
     new TodoItem("kitap okumak", false)

    ];
  }
}
export class TodoItem{
  description;
  action;
  constructor(description, action){
    this.description=description;
    this.action=action;
  }
}