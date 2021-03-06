import Med from ".";
import MedStatus from "../../enums/MedStatus";

export class MedUtils {
    static renderTime = (medData: Med): string => {
        if(!medData.time) {
            return "";
        }

        return `${medData.time.hours}:${medData.time.minutes}`;
    };

    static renderStock = (medData: Med): string => {
        return `${medData.actualStock}/${medData.maxStock}`;
    };

    static isInLowStock = (medData: Med): boolean => {
        return medData.actualStock <= medData.lowStockWarning;
    };

    static hasReachFinalDate = (medData: Med): boolean => {
        return medData.finishDate !== null && new Date() > medData.finishDate;
    };

    static getMedStatus = (medData: Med): MedStatus => {
        if (this.hasReachFinalDate(medData)) {
            return MedStatus.Compleated;
        }
        else if (this.isInLowStock(medData)) {
            return MedStatus.LowInStock;
        }
        else {
            return MedStatus.Default;
        }
    };
}
