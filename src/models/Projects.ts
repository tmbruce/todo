class Project {
    
    title: string;
    id: string;
    color: string;
    viewType: number;
    tasks: string[];
    subProjects?: string[];
    
    constructor(title: string, id: string, color: string, viewType: number, tasks: string[], subProjects?: string[] ) {
        this.title = title;
        this.id = id;
        this.color = color;
        this.viewType = viewType;
        this.tasks = tasks;
        this.subProjects = subProjects;
    }

    addProject(id: string) {
        this.subProjects?.push(id);
    }
    
    addTasl(id: string) {
        this.tasks.push(id);
    }
}

export default Project;