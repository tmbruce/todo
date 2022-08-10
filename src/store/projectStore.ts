import Project from "../models/Projects";
import events from '../store/events';

const projectStore = (() => {

    let projects: Project[] = [];

    const update = () => events.update('projectStore', projects);

    const addProject = (project: Project) => {
        projects.push(project);
        update();
    }

    const removeProject = (id: string) => {
        projects = projects.filter(project => project.id !== id);
        update();
    }

    const updateProject = (project: Project) => {
        const index = projects.findIndex(p => p.id === project.id);
        projects[index] = project;
        update();
    }

    events.subscribe('newProject', (project: Project) => addProject(project));
    events.subscribe('removeProject', (id: string) => removeProject(id));
    events.subscribe('updateProject', (project: Project) => updateProject(project));

    return { addProject, removeProject, updateProject };

})();

