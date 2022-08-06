let events = (() => {
    let events: { [eventName: string]: Function[] } = {};
    const subscribe = (eventName: string, callback: Function) => {
        events[eventName] = events[eventName] || [];
        events[eventName].push(callback);
    }

    const unsubscribe = (eventName: string, callback: Function) => {
        if (events[eventName]) {
            for (let i = 0; i < events[eventName].length; i++) {
                if (events[eventName][i] === callback) {
                    events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    const update = (eventName: string, data: any) => {
        if (events[eventName]) {
            events[eventName].forEach(function (callback) {
                callback(data);
            });
        }
    }

    return {subscribe, unsubscribe, update};
})();

export default events;