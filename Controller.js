const keyMap = {
    KeyA: `left`,
    KeyD: `right`
}

export class Controller
{
    constructor()
    {
        this.keys = {
            left: false,
            right: false
        };

        window.addEventListener(`keydown`, (event) => this.keydownHandler(event));
        window.addEventListener(`keyup`, (event) => this.keyupHandler(event));
    }

    keydownHandler(event)
    {
        const key = keyMap[event.code];

        if (!key) return;

        this.keys[key] = true;
    }

    keyupHandler(event)
    {
        const key = keyMap[event.code];

        if (!key) return;

        this.keys[key] = false;
    }
}