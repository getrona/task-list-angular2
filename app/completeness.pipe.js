"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CompletenessPipe = (function () {
    function CompletenessPipe() {
    }
    CompletenessPipe.prototype.transform = function (input, desiredCompleteness) {
        var output = [];
        if (desiredCompleteness === "incompleteTasks") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].done === false) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredCompleteness === "completedTasks") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].done === true) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    return CompletenessPipe;
}());
CompletenessPipe = __decorate([
    core_1.Pipe({
        name: "completeness",
        pure: false
    })
], CompletenessPipe);
exports.CompletenessPipe = CompletenessPipe;
//# sourceMappingURL=completeness.pipe.js.map