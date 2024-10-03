import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const scaleFontSize = (size: number) => (width / 375) * size;

export const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#423E37",
    },
    tabBar: {
        backgroundColor: "#423E37",
        padding: 5,
    },
    tabBarItem: {
        padding: 5,
    },
    navbarItem: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        flex: 1,
        padding: 15,
        color: "#EDEBD7"
    },
    container: {
        padding: 0,
        margin: 5,
        flex: 1,
    },
    centerContainer: {
        padding: 0,
        margin: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        justifyContent: "flex-start",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    button: {
        borderWidth: 1,
        padding: 10,
        height: 50,
        margin: 12,
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#423E37",
        color: "#EDEBD7",
    },
    list: {
        borderWidth: 1,
        margin: 10,
        backgroundColor: "#fff",
    },
    listItem: {
        borderWidth: 0.5,
        margin: 0,
        padding: 5,
        backgroundColor: "#fff",
    },
    bold: {
        fontWeight: "bold",
    },
    italics: {
        fontStyle: "italic"
    },
    logo: {
        fontSize: scaleFontSize(24),
        fontWeight: "bold",
        color: "#E3B23C"
    },
    h1: {
        fontSize: scaleFontSize(28),
        margin: 5,
    },
    h2: {
        fontSize: scaleFontSize(24),
        margin: 5,
    },
    h3: {
        fontSize: scaleFontSize(20),
        margin: 5,
    },
    h4: {
        fontSize: scaleFontSize(16),
        margin: 5,
    }
});
