import Med from ".";

export class MedUtils {
    static renderTime = (medData: Med): string => {
        if(!medData || !medData.time) {
            return "";
        }

        return `${medData.time.getHours()}:${medData.time.getMinutes()}`;
    };

    static renderStock = (medData: Med): string => {
        if(!medData) {
            return "";
        }

        return `${medData.actualStock}/${medData.maxStock}`;
    };
}
