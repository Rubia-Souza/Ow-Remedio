import NotificationTypes from "../NotificationTypes";

class Med {
    readonly id: string;
    name: string = "";
    time: Date = new Date();
    startDate: Date = new Date();
    finishDate: Date | null = null;
    actualStock: number = 0;
    maxStock: number = 0;
    lowStockWarning: number = 0;
    amountConsumedPerUse: number = 0;
    notificationType: NotificationTypes = NotificationTypes.Push;
    hasSound: boolean = false;

    constructor(name: string) {
        this.name = name;
        this.id = this.createId();
    }

    private createId = (): string => {
        const actualDate = new Date();
        return `${this.name}_${actualDate.toISOString()}_${Math.random().toPrecision(7)}`;
    };
}

export default Med;
