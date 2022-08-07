import SidebarItem from "./SidebarItem";
import Inbox from '@assets/inbox.svg';
import CalendarDay from '@assets/calendar-blank-outline.svg';
import CalendarMonth from '@assets/calendar-month-outline.svg';
import Squares from '@assets/squares.svg';

import events from '../store/events';

const Sidebar = () => {
    let sidebarOpen = true;
    let nav = document.querySelector('.nav')! as HTMLDivElement;
    let inbox = new SidebarItem('inbox', Inbox, 'Inbox', '8');
    let today = new SidebarItem('today', CalendarDay, 'Today', '4');
    let month = new SidebarItem('upcoming', CalendarMonth, 'Upcoming', '2');
    let filters = new SidebarItem('filters', Squares, 'Filters & Labels');

    nav.append(inbox.render(), today.render(), month.render(), filters.render());

    const toggleActive = () => {

    }

    const toggleSidebar = () => {
        if (sidebarOpen) {
            nav.style.left = '-20rem';
            sidebarOpen = !sidebarOpen;
        } else {
            nav.style.left = '0rem';
            sidebarOpen = !sidebarOpen;
        }
    }
    events.subscribe('sidebarToggle', toggleSidebar)
}

export default Sidebar;