import NotificationTypes from "../NotificationTypes";
import Med from "./Med";

export class MedBuilder {
    private readonly med: Med;

    constructor(name: string) {
        this.med = new Med(name);
    }
    
    public withTime = (time: Date): MedBuilder => {
        this.med.time = time;
        return this;
    };

    public withNotificationType = (notificationType: NotificationTypes): MedBuilder => {
        this.med.notificationType = notificationType;
        return this;
    };

    public withMaxStock = (maxStock: number): MedBuilder => {
        this.med.maxStock = maxStock;
        return this;
    };

    public withActualStock = (actualStock: number): MedBuilder => {
        this.med.actualStock = actualStock;
        return this;
    };

    public thatHasSound = (hasSound: boolean): MedBuilder => {
        this.med.hasSound = hasSound;
        return this;
    };

    public build = (): Med => {
        return this.med;
    };
}
