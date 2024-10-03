// Denote a component is loading

import { ActivityIndicator, View } from "react-native";

export const Loading = () => {
    return (
        <View style={{ margin: 20 }}>
            <ActivityIndicator size="large" />
        </View>
    );
}
