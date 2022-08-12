import SidebarItem from "./SidebarItem";
import Inbox from '@assets/inbox.svg';
import CalendarDay from '@assets/calendar-blank-outline.svg';
import CalendarMonth from '@assets/calendar-month-outline.svg';
import Squares from '@assets/squares.svg';
import Add from '@assets/plus_dark.svg';
import Caret from '@assets/caret-down.svg';

import events from '../store/events';
import htmlElement from "../utils/htmlElement";
import iconBtn from "../utils/iconBtn";

const Sidebar = () => {
    const SIDEBAR_WIDTH = 19.5;
    let sidebarOpen = true;
    let projectsOpen = true;

    let nav = document.querySelector('.nav')! as HTMLDivElement;
    let inbox = new SidebarItem('inbox', Inbox, 'Inbox', '8');
    let today = new SidebarItem('today', CalendarDay, 'Today', '4');
    let month = new SidebarItem('upcoming', CalendarMonth, 'Upcoming', '2');
    let filters = new SidebarItem('filters', Squares, 'Filters & Labels');
    let caret = iconBtn(Caret, 'project-dropdown');
    let projects = htmlElement('h3', 'projects-header');
    let containerDiv = htmlElement('div', 'container-div');
    projects.textContent = 'Projects';
    containerDiv.append(caret, projects);
    let projectAdd = iconBtn(Add, 'project-add icon-btn');
    let projectsContainer = htmlElement('div', 'projects-header-container');
    projectsContainer.append(containerDiv, projectAdd);
    nav.append(inbox.render(), today.render(), month.render(), filters.render(), projectsContainer);

    const toggleActive = () => {
        
    }

    const addProject = () => events.update('addProject', {});

    const toggleProjects = () => {
        let caret = document.querySelector('.project-dropdown')! as HTMLImageElement;
        caret.style.transform = projectsOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
        projectsOpen = !projectsOpen;
    }

    const toggleSidebar = () => {
        let container = document.querySelector('.container-div') as HTMLDivElement;
        if (sidebarOpen) {
            nav.style.left = `-${SIDEBAR_WIDTH}rem`;
            container.style.gridTemplateColumns = '0 1fr';
            sidebarOpen = !sidebarOpen;
        } else {
            nav.style.left = '0rem';
            container.style.gridTemplateColumns = `${SIDEBAR_WIDTH}rem 1fr`;
            sidebarOpen = !sidebarOpen;
        }
    }
    document.querySelector('.container-div')?.addEventListener('click', toggleProjects);
    document.querySelector('.project-add')?.addEventListener('click', addProject );  

    events.subscribe('sidebarToggle', toggleSidebar)
}

export default Sidebar;