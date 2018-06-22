import { Clock } from "../7-9/clock";

class ExtendedClock extends Clock {
    constructor(params) {
        super(params);
        this._template = template;
        let { delay = 1000} = params;
        this._delay = delay; 
    }

    start() {
        this._render();
        this._timer = setInterval(() => this._render(), this._delay);
    }
}