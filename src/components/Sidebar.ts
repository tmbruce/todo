import events from '../store/events';

const Sidebar = () => {
    let sidebarOpen = true;
    let nav = document.querySelector('.nav')! as HTMLDivElement;

    const toggleSidebar = () => {
        if (sidebarOpen) {
            nav.style.width = '0';
            sidebarOpen = !sidebarOpen;
        } else {
            nav.style.width = '18rem';
            sidebarOpen = !sidebarOpen;
        }
    }


    events.subscribe('sidebarToggle', toggleSidebar)

}

export default Sidebar;