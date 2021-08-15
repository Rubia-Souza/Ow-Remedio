import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ScreenData } from "./ScreenData";

export class TabScreenData extends ScreenData {
    tabBarTitle: string;
    headerTitle?: string;
    enableIcon: any;
    disableIcon: any;

    constructor(id: string, tabBarTitle: string = "", headerTitle: string = "", enableIcon: any = null, disableIcon: any = null) {
        super(id);

        this.tabBarTitle = tabBarTitle;
        this.enableIcon = enableIcon;
        this.disableIcon = disableIcon;
        
        let hasHeaderTitleContent: boolean = (!!headerTitle && headerTitle != "");
        if (hasHeaderTitleContent) {
            this.headerTitle = headerTitle;
        }
        else {
            this.headerTitle = tabBarTitle;
        }
    }

    getTabOptions(): BottomTabNavigationOptions {
        return {
            tabBarLabel: this.tabBarTitle, 
            title: this.headerTitle,
        };
    }
}
