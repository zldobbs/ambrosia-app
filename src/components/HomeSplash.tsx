// Example component to help showcase how code base should be organized

// Use Axios for HTTP requests
// TODO: Create an instance for the client to use a consistent configuration
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Text } from "react-native";

// TODO: Better use of constants/config
const BACKEND_URL = "http://localhost:8080"

// Could use props here...
export const HomeSplash = () => {
    // Demonstrate state usage
    const [isServerUp, setIsServerUp] = useState(false);

    // TODO: More graceful way to handle the async/promise stuff here?
    var serverUp = false;
    axios.get(`${BACKEND_URL}/heartbeat`).then(
        (response: AxiosResponse) => {
            // TODO: Don't log this in prod!
            console.log(response);
            setIsServerUp(true);
        },
        (error) => {
            // TODO: Don't log this in prod!
            console.log(error);
            setIsServerUp(false);
        }
    );

    return (
        <Text>The server connection is: {isServerUp ? 'good' : 'bad'}!</Text>
    );
}