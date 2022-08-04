const iconBtn = (src: string, className: string, id?: string): HTMLImageElement => {
    let btn = new Image();
    btn.src = src;
    btn.className = className;
    if (id) btn.id = id;
    return btn;
}

export default iconBtn;