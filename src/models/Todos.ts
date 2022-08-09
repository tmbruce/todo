class Todo {
    title: string;
    id: string;
    completed: boolean;
    dueDate: Date;
    children: string[];
    labels: string[];
    priority: number;
    project: string;

    constructor(title: string, id:string, completed: boolean, dueDate: Date, children: string[], labels: string[], priority: number, project: string) {
        this.title = title;
        this.id = id;
        this.completed = completed;
        this.dueDate = dueDate;
        this.children = children;
        this.labels = labels;
        this.priority = priority;
        this.project = project;
    }

    

}
