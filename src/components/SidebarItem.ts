import HtmlElement from "../utils/htmlElement";
import iconBtn from "../utils/iconBtn";
import noop from "../utils/noop";

class SidebarItem {

    id: string;
    img: string;
    label: string;
    items?: string;

    constructor(id: string, img: string, label: string, items?: string) {
        this.id = id;
        this.img = img;
        this.label = label;
        this.items = items;
    }
    render() {
        let container = HtmlElement('div', 'sidebar-item', this.id) as HTMLDivElement;
        let labelText = HtmlElement('h3', 'sidebar-item-text');
        labelText.textContent = this.label;
        let icon = iconBtn(this.img, 'sidebar-icon');
        let items = HtmlElement('h3', 'sidebar-items');
        this.items ? items.textContent = this.items : items.textContent = '';
        container.append(icon, labelText, items);
        return container;
    }

    updateItems(number: string) {
        let items = document.querySelector(`${this.id}`);
        items ? items.textContent = number : noop();
    }

}