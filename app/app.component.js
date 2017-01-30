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
var task_model_1 = require('./task.model');
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Angular Homework';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        this.selectedTask = null;
        this.masterTaskList = [
            new task_model_1.Task("Finish weekend Angular homework for Epicodus course", 3),
            new task_model_1.Task('Begin brainstorming possible JavaScript group projects', 2),
            new task_model_1.Task('Add README file to last few Angular repos on GitHub', 2)
        ];
    }
    AppComponent.prototype.editTask = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedTask = null;
    };
    AppComponent.prototype.addTask = function (newTaskFromChild) {
        this.masterTaskList.push(newTaskFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>\n    <h3>{{currentFocus}}</h3>\n    <task-list [childTaskList]=\"masterTaskList\" (clickSender)=\"editTask($event)\"></task-list>\n    <hr>\n    <edit-task [childSelectedTask]=\"selectedTask\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-task>\n    <new-task (newTaskSender)=\"addTask($event)\"></new-task>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map