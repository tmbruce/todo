const createSVG = (src: string, className: string, id?: string): HTMLObjectElement => {
    let svg = document.createElement('object');
    svg.data = src;
    svg.className = className;
    if (id) svg.id = id;
    return svg;
};

export default createSVG;