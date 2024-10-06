import { Platform } from "react-native";

// This is only for use in development environments
const ambrosiaConfig = {
    BACKEND_URL: Platform.OS == "android" ? "http://10.0.2.2:8080" : "http://localhost:8080"
}

export default ambrosiaConfig;
