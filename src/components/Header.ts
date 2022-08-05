import Menu from '@assets/menu.svg';
import Home from '@assets/home.svg';
import Search from '@assets/search.svg';
import Plus from '@assets/plus.svg';
import Question from '@assets/question.svg';
import Bell from '@assets/bell.svg';
import Avatar from '@assets/man.png';
import iconBtn from "../utils/iconBtn";
import htmlElement from "../utils/htmlElement";

const Header = () => {
    let headerLeft = document.querySelector('.header-left')!;
    let menuIcon = iconBtn(Menu, 'menu-icon icon-btn');
    let homeIcon = iconBtn(Home, 'home-icon icon-btn');
    let searchIcon = iconBtn(Search, 'search-icon');
    let inputField = htmlElement('input', 'header-search') as HTMLInputElement;
    inputField.placeholder = 'Find';
    inputField.append(searchIcon);
    headerLeft.append(menuIcon, homeIcon, inputField);

    let headerRight = document.querySelector('.header-right')!;
    let addIcon = iconBtn(Plus, 'plus-icon icon-btn');
    let circleIcon = htmlElement('div', 'circle-icon icon-btn');
    let tasksDone = htmlElement('div', 'tasks-done');
    tasksDone.textContent = '3/4';
    let helpIcon = iconBtn(Question, 'question-icon icon-btn');
    let notificationIcon = iconBtn(Bell, 'bell-icon icon-btn');
    let gearIcon = iconBtn(Avatar, 'avatar-icon icon-btn');

    headerRight.append(addIcon, circleIcon, tasksDone, helpIcon, notificationIcon, gearIcon);
}

export default Header;