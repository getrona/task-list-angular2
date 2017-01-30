"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByCompleteness = "incompleteTasks";
    }
    TaskListComponent.prototype.editButtonHasBeenClicked = function (taskToEdit) {
        this.clickSender.emit(taskToEdit);
    };
    TaskListComponent.prototype.toggleDone = function (clickedTask, setCompleteness) {
        clickedTask.done = setCompleteness;
    };
    TaskListComponent.prototype.isDone = function (clickedTask) {
        if (clickedTask.done === true) {
            alert("This task is done!");
        }
        else {
            alert("This task is not done. Better get to work!");
        }
    };
    TaskListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByCompleteness = optionFromMenu;
    };
    TaskListComponent.prototype.priorityColor = function (currentTask) {
        if (currentTask.priority === 3) {
            return "bg-danger";
        }
        else if (currentTask.priority === 2) {
            return "bg-warning";
        }
        else {
            return "bg-info";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TaskListComponent.prototype, "childTaskList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "clickSender", void 0);
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "\n    <select (change)=\"onChange($event.target.value)\">\n      <option value=\"allTasks\">All Tasks</option>\n      <option value=\"completedTasks\">Completed</option>\n      <option value=\"incompleteTasks\" selected=\"selected\">Incomplete Tasks</option>\n    </select>\n  <ul>\n    <li [class]=\"priorityColor(currentTask)\" (click)=\"isDone(currentTask)\" *ngFor=\"let currentTask of childTaskList | completeness:filterByCompleteness\">{{currentTask.description}}\n    <input *ngIf=\"currentTask.done === true\" type=\"checkbox\" checked (click)=\"toggleDone (currentTask, false)\"/>\n    <input *ngIf=\"currentTask.done === false\" type=\"checkbox\" (click)=\"toggleDone (currentTask, true)\"/>\n    <button (click)=\"editButtonHasBeenClicked(currentTask)\">Edit!</button></li>\n  </ul>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map