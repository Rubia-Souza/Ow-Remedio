import Med from "../dto/Med";
import NotificationTypes from "../dto/NotificationTypes";

export const Med1: Med = {
    name: "Buscopan",
    time: new Date(0,0, 0, 12, 30, 0),
    maxStock: 20,
    actualStock: 10,
    hasSound: true,
    notificationType: NotificationTypes.Alarm,
};

export const Med2: Med = {
    name: "Flogoral",
    time: new Date(0,0, 0, 18, 0, 0),
    maxStock: 30,
    actualStock: 5,
    hasSound: false,
    notificationType: NotificationTypes.Push,
};
