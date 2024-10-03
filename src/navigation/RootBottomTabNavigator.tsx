// Tab navigator

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabOptions } from "./options";
import { ExploreStackScreenNavigator } from "./ExploreStackScreenNavigator";
import { CookbookStackScreenNavigator } from "./CookbookStackScreenNavigator";
import { RootBottomTabNavigatorParamList } from "./types";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator<RootBottomTabNavigatorParamList>();

export const RootBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions} >
            <Tab.Screen name="Explore" component={ExploreStackScreenNavigator} options={{ tabBarIcon: () => <Ionicons name="search" color="#EDEBD7" /> }} />
            <Tab.Screen name="Cookbook" component={CookbookStackScreenNavigator} options={{ tabBarIcon: () => <Ionicons name="book-outline" color="#EDEBD7" /> }} />
        </Tab.Navigator>
    );
}
