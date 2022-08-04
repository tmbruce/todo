import Menu from '@assets/menu.svg';
import createSVG from "../utils/svg";

const Header = () => {
    let headerContainer = document.querySelector('.top-bar')!;

    let headerLeft = document.createDocumentFragment();
    let headerRight = document.createDocumentFragment();
    let menuImg = createSVG(Menu, 'menu-img');

    headerLeft.append(menuImg);

    headerContainer.append(headerLeft);
}

export default Header;