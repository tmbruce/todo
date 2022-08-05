const htmlElement = <T> (type: string, className: string, id?: string) => {
    let element = document.createElement(type);
    element.className = className;
    if (id) element.id = id;
    return element;
}

export default htmlElement;