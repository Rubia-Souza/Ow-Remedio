import { addLeftZeros } from "../../utils/Utils";
import { DefaultLocale, DefaultTimeOptions } from "./TimeSetting";

class Time {
    private _asDate: Date = new Date();

    static EmptyTime = new Time(0, 0);

    constructor(hours: number, minutes: number, seconds: number = 0) {
        this._asDate = new Date(0, 0, 0, hours, minutes, seconds);  
    }

    public asDate = (): Date => {
        return this._asDate;
    };

    public setTime = (hours: number, minutes: number, seconds: number = 0): void => {
        this._asDate = new Date(0, 0, 0, hours, minutes, seconds);
    };

    public setTimeByDate = (date: Date): void => {
        this.setHours(date.getHours());
        this.setMinutes(date.getMinutes());
        this.setSeconds(date.getSeconds());
    };

    public setHours = (hours: number): void => {
        this._asDate.setHours(hours);
    };

    public setMinutes = (minutes: number): void => {
        this._asDate.setMinutes(minutes);
    };

    public setSeconds = (seconds: number): void => {
        this._asDate.setSeconds(seconds);
    };

    public get hours(): string {
        const hours = this._asDate.getHours();
        return addLeftZeros(hours, 2);
    }

    public get minutes(): string {
        const minutes = this._asDate.getMinutes();
        return addLeftZeros(minutes, 2);
    }

    public get seconds(): string {
        const seconds = this._asDate.getSeconds();
        return addLeftZeros(seconds, 2);
    }

    public toString(timeOptions: Intl.DateTimeFormatOptions = DefaultTimeOptions): string {
        return this._asDate.toLocaleTimeString(DefaultLocale, timeOptions);
    };
}

export default Time;
