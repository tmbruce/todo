import Menu from '@assets/menu.svg';
import Home from '@assets/home.svg';

import iconBtn from "../utils/iconBtn";

const Header = () => {
    let headerLeft = document.querySelector('.header-left')!;
    let menuIcon = iconBtn(Menu, 'menu-icon icon-btn');
    let homeIcon = iconBtn(Home, 'home-icon icon-btn');

    headerLeft.append(menuIcon, homeIcon);
}

export default Header;