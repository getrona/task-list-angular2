import { Component, Input, Output, EventEmitter } from  '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allTasks">All Tasks</option>
      <option value="completedTasks">Completed</option>
      <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
    </select>
  <ul>
    <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}}
    <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone (currentTask, false)"/>
    <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone (currentTask, true)"/>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>

  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  filterByCompleteness: string = "incompleteTasks";

isDone(clickedTask: Task) {
  if(clickedTask.done === true) {
    alert("This task is done!");
  } else {
    alert("This task is not done. Better get to work!");
  }
 }

 onChange(optionFromMenu) {
   this.filterByCompleteness = optionFromMenu;
 }

 priorityColor(currentTask){
   if(currentTask.priority === 3){
     return "bg-danger";
   } else if (currentTask.priority === 2) {
     return "bg-warning";
   } else {
     return "bg-info";
   }
 }
}