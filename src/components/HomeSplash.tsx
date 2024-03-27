// Example component to help showcase how code base should be organized

// Use Axios for HTTP requests
// TODO: Create an instance for the client to use a consistent configuration
import axios, { AxiosResponse } from "axios";

// TODO: Better use of constants/config
const BACKEND_URL = "http://localhost:8080"

export const HomeSplash = () => {
    // TODO: Use more react-specific features here
    //       EX: STATE, HOOKS, REDUX, ...

    // TODO: More graceful way to handle the async/promise stuff here?
    var serverUp = false;
    axios.get(`${BACKEND_URL}/heartbeat`).then(
        (response: AxiosResponse) => {
            // TODO: Don't log this in prod!
            console.log(response);
            serverUp = true;
        },
        (error) => {
            // TODO: Don't log this in prod!
            console.log(error);
            serverUp = false;
        }
    );

    return (
        <h1>The server connection is: {serverUp ? 'good' : 'bad'}!</h1>
    );
}