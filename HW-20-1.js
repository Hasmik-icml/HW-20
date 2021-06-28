class Action {
  
  constructor(task) {
    this.task = task;
    this.done = false;
  }
  complete() {
      this.done =true;
  }
  salaryInfo = [];
  salary(money) {
    if (this.done === true){
      this.salaryInfo.push(money);
    }
  }
 
}
let newAction = new Action("Do task 1");
console.log(newAction.task);
console.log(newAction.done);
newAction.complete();
console.log(newAction.done);
newAction.salary(100000);
console.log(newAction.salaryInfo);


