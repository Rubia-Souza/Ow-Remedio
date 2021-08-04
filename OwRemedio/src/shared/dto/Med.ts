import NotificationTypes from "./NotificationTypes";

interface Med {
    name: string;
    time: Date;
    actualStock: number;
    maxStock: number;
    notificationType: NotificationTypes;
    hasSound: boolean;
}

export default Med;
