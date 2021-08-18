import React from "react";
import { TabScreenData } from "../../shared/dto/ScreenData";

import Day from "../../imgs/icons/Day";
import DayFill from "../../imgs/icons/DayFill";

export const TodayMedsScreenData = new TabScreenData(
    "TodayMeds", 
    "Hoje", 
    "Próximos Remédios", 
    <DayFill width="39" height="39" />, 
    <Day width="39" height="39" />
);
