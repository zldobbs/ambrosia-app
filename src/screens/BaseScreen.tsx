// Base screen intended for re-use by other screens

import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { styles } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type BaseScreenProps = {
    children: JSX.Element | JSX.Element[];
}

export const BaseScreen = ({ children }: BaseScreenProps) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            {children}
            <StatusBar style="auto" />
        </ScrollView>
    );
}
