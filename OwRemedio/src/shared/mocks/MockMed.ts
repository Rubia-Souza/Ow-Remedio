import Med, { MedBuilder } from "../dto/Med";
import NotificationTypes from "../dto/NotificationTypes";

export const Med1: Med = new MedBuilder("Buscopan")
    .withTime(new Date(0,0, 0, 12, 30, 0))
    .withMaxStock(20)
    .withActualStock(10)
    .thatHasSound(true)
    .withNotificationType(NotificationTypes.Alarm).build();

export const Med2: Med = new MedBuilder("Flogoral")
    .withTime(new Date(0,0, 0, 3, 0, 0))
    .withMaxStock(30)
    .withActualStock(5)
    .thatHasSound(false)
    .withNotificationType(NotificationTypes.Push).build();
