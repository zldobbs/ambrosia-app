// Simple error message component

import { Text, View } from "react-native";

type ErrorMessageProps = {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <View style={{ margin: 5 }}>
            <Text style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>Error! {message}</Text>
        </View>
    );
}
