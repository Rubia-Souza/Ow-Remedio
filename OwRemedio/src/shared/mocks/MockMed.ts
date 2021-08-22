import Med, { MedBuilder } from "../dto/Med";
import Time from "../dto/Time";
import NotificationTypes from "../enums/NotificationTypes";

export const Med1: Med = new MedBuilder("Buscopan")
    .withTime(new Time(3, 0))
    .withMaxStock(20)
    .withActualStock(10)
    .thatHasSound(true)
    .withFinishDate(new Date(2020, 3, 2))
    .withNotificationType(NotificationTypes.Alarm).build();

export const Med2: Med = new MedBuilder("Flogoral")
    .withTime(new Time(12, 23))
    .withMaxStock(30)
    .withActualStock(5)
    .thatHasSound(false)
    .withLowStockWarning(10)
    .withNotificationType(NotificationTypes.Push).build();
