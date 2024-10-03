// Define consistent options to use with multiple navigators

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { styles } from "../../styles";
import { Text } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const screenNavigationOptions: NativeStackNavigationOptions = {
    headerTitle: "ambrosia",
    headerTitleAlign: "center",
    headerTitleStyle: styles.logo,
    headerTintColor: "#EDEBD7",
    headerStyle: styles.navBar,
    headerRight: () => (<Text style={styles.navbarItem} > Profile </Text>)
}

export const tabOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBar,
    tabBarActiveTintColor: "#E3B23C",
    tabBarInactiveTintColor: "#EDEBD7",
    tabBarItemStyle: { paddingBottom: 10 },
}
