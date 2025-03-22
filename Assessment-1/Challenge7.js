// Example: 
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        this.tasks.push({ id: this.currentId, name: name, status: "Incomplete" });
        this.currentId++;
    };
    TaskManager.prototype.completeTask = function (id) {
        var taskFound = false;
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].status = "Completed";
                taskFound = true;
                break;
            }
        }
        if (!taskFound) {
            console.log("Task with ID ".concat(id, " is not found"));
        }
    };
    TaskManager.prototype.displayTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks(); //Task ID: 1, Name: "Learn TypeScript", Status: Completed 
