import Menu from '@assets/menu.svg';
import Home from '@assets/home.svg';
import Search from '@assets/search.svg';

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
}

export default Header;