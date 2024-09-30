// Simple error message component

import { Text } from "react-native";

export const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <Text>Error! {message}</Text>
    );
}
