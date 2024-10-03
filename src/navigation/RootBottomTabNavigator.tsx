// Tab navigator

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabOptions } from "./options";
import { ExploreStackScreen } from "./ExploreStackScreen";
import { CookbookStackScreen } from "./CookbookStackScreen";
import { RootBottomTabNavigatorParamList } from "./types";

const Tab = createBottomTabNavigator<RootBottomTabNavigatorParamList>();

export const RootBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions} >
            <Tab.Screen name="Explore" component={ExploreStackScreen} />
            <Tab.Screen name="Cookbook" component={CookbookStackScreen} />
        </Tab.Navigator>
    );
}
