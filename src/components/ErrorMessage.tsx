// Simple error message component

import { Text } from "react-native";

type ErrorMessageProps = {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Text style={{ color: "red" }}>Error! {message}</Text>
    );
}
