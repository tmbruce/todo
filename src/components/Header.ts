import Menu from '@assets/menu.svg';
import Home from '@assets/home.svg';
import Add from '@assets/plus.svg';
import Question from '@assets/question.svg';
import Bell from '@assets/bell.svg';
import Avatar from '@assets/man.png';

import iconBtn from "../utils/iconBtn";
import htmlElement from "../utils/htmlElement";
import events from '../store/events';

const Header = () => {

    let focus = false;

    let headerLeft = document.querySelector('.header-left')!;
    let menuIcon = iconBtn(Menu, 'menu-icon icon-btn');
    let homeIcon = iconBtn(Home, 'home-icon icon-btn');
    let inputField = htmlElement('input', 'header-search') as HTMLInputElement;
    inputField.placeholder = 'Search';

    let headerRight = document.querySelector('.header-right')!;
    let addIcon = iconBtn(Add, 'plus-icon icon-btn');
    let tasksContainer = htmlElement('div', 'tasks-container');
    let circleIcon = htmlElement('div', 'circle-icon');
    let tasksDone = htmlElement('div', 'tasks-done');
    tasksDone.textContent = '3/4';

    let helpIcon = iconBtn(Question, 'question-icon icon-btn');
    let notificationIcon = iconBtn(Bell, 'bell-icon icon-btn');
    let avatarIcon = iconBtn(Avatar, 'avatar-icon icon-btn');

    inputField.addEventListener('input', (e) => {
        let searchBox = e.target as HTMLInputElement;
        events.update('searchBoxTerm', searchBox.value);
    });

    menuIcon.addEventListener('click', () => {
        events.update('sidebarToggle', {})
    });

    headerLeft.append(menuIcon, homeIcon, inputField);
    tasksContainer.append(circleIcon, tasksDone);
    headerRight.append(addIcon, tasksContainer, helpIcon, notificationIcon, avatarIcon);
}

export default Header;