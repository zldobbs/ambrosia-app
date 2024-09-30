// Example component to help showcase how code base should be organized

import ambrosiaConfig from "../../ambrosia.config";

// Use Axios for HTTP requests
// TODO: Create an instance for the client to use a consistent configuration
import axios, { AxiosResponse, AxiosError } from "axios";
import { useState } from "react";
import { Text, View } from "react-native";

// Could use props here...
export const HomeSplash = () => {
    // Demonstrate state usage
    const [isServerUp, setIsServerUp] = useState(false);

    // TODO: More graceful way to handle the async/promise stuff here?
    axios.get(`${ambrosiaConfig.BACKEND_URL}/heartbeat`).then(
        (_: AxiosResponse) => {
            setIsServerUp(true);
        },
        (_: AxiosError) => {
            setIsServerUp(false);
        }
    );

    return (
        <View>
            <Text>Welcome to Ambrosia!</Text>
            <Text>The server connection is {isServerUp ? 'good' : 'bad'}!</Text>
        </View>
    );
}
