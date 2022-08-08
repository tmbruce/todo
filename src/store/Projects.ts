class Project {
    title: string;
    id: string;
    color: string;
    viewType: number;
    children: string[];

    constructor(title: string, id: string, color: string, viewType: number, children: string[]) {
        this.title = title;
        this.id = id;
        this.color = color;
        this.viewType = viewType;
        this.children = children;
    }

    addProject(id: string) {
        this.children.push(id);
    }
}

export default Project;