 // Example: 

class TaskManager { 
    private tasks: { id: number; name: string; status: string }[] = []; 
    private currentId: number = 1; 
    addTask(name: string): void { 
        this.tasks.push({id: this.currentId, name, status:"Incomplete"});
        this.currentId++;
    } 
    completeTask(id: number): void { 
        let taskFound = false;
        for (let i =0; i<this.tasks.length; i++){
            if(this.tasks[i].id === id){
                this.tasks[i].status = "Completed";
                taskFound = true;
                break;
            }
        }
        if(!taskFound){
            console.log(`Task with ID ${id} is not found`);
        }
    } 
    displayTasks(): void { 
        this.tasks.forEach(task =>{
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    } 
}

const taskManager = new TaskManager(); 
taskManager.addTask("Learn TypeScript"); 
taskManager.completeTask(1); 
taskManager.displayTasks(); //Task ID: 1, Name: "Learn TypeScript", Status: Completed 