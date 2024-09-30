// Example component to help showcase how code base should be organized

import ambrosiaConfig from "../../ambrosia.config";

// Use Axios for HTTP requests
// TODO: Create an instance for the client to use a consistent configuration
import axios, { AxiosResponse, AxiosError } from "axios";
import { useState } from "react";
import { Text } from "react-native";

// Could use props here...
export const HomeSplash = () => {
    // Demonstrate state usage
    const [isServerUp, setIsServerUp] = useState(false);

    // TODO: More graceful way to handle the async/promise stuff here?
    axios.get(`${ambrosiaConfig.BACKEND_URL}/heartbeat`).then(
        (response: AxiosResponse) => {
            // TODO: Don't log this in prod!
            console.log(response);
            setIsServerUp(true);
        },
        (error: AxiosError) => {
            // TODO: Don't log this in prod!
            console.log(error['message']);
            setIsServerUp(false);
        }
    );

    return (
        <Text>The server is {isServerUp ? 'good' : 'bad'}!</Text>
    );
}
