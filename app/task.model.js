"use strict";
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map