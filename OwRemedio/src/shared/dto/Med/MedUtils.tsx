import Med from ".";

export class MedUtils {
    static renderTime = (medData: Med): string => {
        if(!medData || !medData.time) {
            return "";
        }

        let time: string = medData.time.toLocaleTimeString();
        time = time.split(" ")[0];

        const hours = time.split(":")[0];
        const minutes = time.split(":")[1];

        return `${hours}:${minutes}`;
    };

    static renderStock = (medData: Med): string => {
        if(!medData) {
            return "";
        }

        return `${medData.actualStock}/${medData.maxStock}`;
    };
}
