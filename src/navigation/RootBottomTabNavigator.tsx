// Tab navigator

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabOptions } from "./options";
import { ExploreStackScreenNavigator } from "./ExploreStackScreenNavigator";
import { CookbookStackScreenNavigator } from "./CookbookStackScreenNavigator";
import { RootBottomTabNavigatorParamList } from "./types";

const Tab = createBottomTabNavigator<RootBottomTabNavigatorParamList>();

export const RootBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions} >
            <Tab.Screen name="Explore" component={ExploreStackScreenNavigator} />
            <Tab.Screen name="Cookbook" component={CookbookStackScreenNavigator} />
        </Tab.Navigator>
    );
}
