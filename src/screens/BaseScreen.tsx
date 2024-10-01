// Base screen intended for re-use by other screens

import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { styles } from "../../styles";

export const BaseScreen = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {children}
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}
