import React from "react";
import Pill from "../../imgs/icons/Pill";
import PillFill from "../../imgs/icons/PillFill";

import { TabScreenData } from "../../shared/dto/ScreenData";

export const MedListScreenData = new TabScreenData(
    "MedList",
    "Remédios",
    <PillFill width="39" height="39" />,
    <Pill width="39" height="39" />
);
