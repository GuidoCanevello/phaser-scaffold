/**
 * A Publisher-Subscriber class that handles communication between elements in the view
 */
export default class ViewMediator extends Phaser.Events.EventEmitter {
    private static _mediatorInstance: ViewMediator;

    private constructor() {
        super();
    }

    on(event: TViewEventName, fn: Function): this {
        // Implemented to add custom events
        return super.on(event, (...args) => {
            if (fn) fn(...args)
        });
    }

    emit(event: TViewEventName, ...args: any[]): boolean {
        // Implemented to add custom events
        return super.emit(event, ...args);
    }

    off(event: TViewEventName): this {
        return super.off(event);
    }

    /**
     * Gets the active instance of the View Mediator
     * 
     * @returns The Singleton instance
     */
    static getInstance(): ViewMediator {
        if (!this._mediatorInstance) {
            this._mediatorInstance = new ViewMediator();
        }
        return this._mediatorInstance;
    }
}