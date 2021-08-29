import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TabBarIconProps } from "../../types/Navigation/NavigationTypes";
import { ScreenData } from "./ScreenData";

export class TabScreenData extends ScreenData {
    tabBarTitle: string;
    headerTitle?: string;
    enableIcon: any;
    disableIcon: any;

    constructor(id: string, tabBarTitle: string = "", enableIcon: any, disableIcon: any,  headerTitle: string = "") {
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

    private selectIcon = (props: TabBarIconProps) => {
        return props.focused ? this.enableIcon : this.disableIcon;
    };

    getTabOptions = (): BottomTabNavigationOptions => {
        return {
            tabBarLabel: this.tabBarTitle, 
            title: this.headerTitle,
            tabBarIcon: this.selectIcon,
        };
    };
}
