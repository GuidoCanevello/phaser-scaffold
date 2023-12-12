type TLogicMediatorEvent = {
    name: TModelEvent,
    functions: Function[],
}

/**
 * Handles communication between Logic and View
 */
export default class LogicMediator {
    private static _mediatorInstance: LogicMediator;

    private _events: TLogicMediatorEvent[];

    private constructor() {
        this._events = [];
    }

    /**
     * Adds a listener to an event, which executes the callback function when the event is emitted
     * 
     * @param event The event name
     * @param fn The callback function to execute when the event is triggered, may send arguments if the event itself sends them
     * @returns The Mediator itself
     */
    on(event: TModelEvent, fn: Function): this {
        const eventIndex = this._events.findIndex(e => e.name === event);

        if (eventIndex == -1) {
            this._events.push({
                name: event,
                functions: [fn]
            })
        } else this._events[eventIndex].functions.push(fn);

        return this;
    }

    /**
     * Triggers an event, executing any listeners currently added to the event
     * 
     * @param event The event name
     * @param args The arguments needed for the event
     * @returns True if able to emit the event succesfully
     */
    emit(event: TModelEvent, ...args: any[]): boolean {
        const eventIndex = this._events.findIndex(e => e.name === event);

        if (eventIndex == -1) return false;

        for (const fn of this._events[eventIndex].functions) fn(...args);

        return true;
    }

    /**
     * Removes all listeners for a given event
     * 
     * @param event The event name
     * @returns The Mediator itself
     */
    off(event: TModelEvent): this {
        const eventIndex = this._events.findIndex(e => e.name === event);

        if (eventIndex != -1) this._events[eventIndex].functions = [];

        return this;
    }

    /**
     * Gets the active instance of the Logic Mediator
     * 
     * @returns The Singleton instance
     */
    static getInstance(): LogicMediator {
        if (!this._mediatorInstance) {
            this._mediatorInstance = new LogicMediator();
        }
        return this._mediatorInstance;
    }
}