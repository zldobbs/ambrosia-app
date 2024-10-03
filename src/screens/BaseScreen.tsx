// Base screen intended for re-use by other screens

import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { styles } from "../../styles";

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
