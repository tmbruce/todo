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

    }

    return { addProject, removeProject, updateProject };

})();

