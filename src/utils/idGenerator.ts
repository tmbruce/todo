const getId = (length: number): string => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charLength = characters.length;
    for ( let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength))
    }
    return result;
}

export default getId;