// Define consistent options to use with multiple navigators

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { styles } from "../../styles";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

// NOTE: Take care when adding additional items here (e.g. headerRight)
//       In the past this caused issues with back button functionality and rendering the logo
export const screenNavigationOptions: NativeStackNavigationOptions = {
    headerTitle: "ambrosia",
    headerTitleAlign: "center",
    headerTitleStyle: styles.logo,
    headerTintColor: "#EDEBD7",
    headerStyle: styles.navBar,
}

export const tabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBar,
    tabBarActiveTintColor: "#E3B23C",
    tabBarInactiveTintColor: "#EDEBD7",
    tabBarItemStyle: { paddingBottom: 10 },
}
