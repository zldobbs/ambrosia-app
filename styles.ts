import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const scaleFontSize = (size: number) => (width / 375) * size;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
    },
    scrollContainer: {
        backgroundColor: "#fff",
        padding: 25,
        flex: 1,
    },
    input: {
        justifyContent: "flex-start",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        backgroundColor: "#000",
        color: "#fff",
    },
    list: {
        height: height / 2.5,
        borderWidth: 1,
    },
    listItem: {
        borderWidth: 0.5,
        margin: 0,
        padding: 5,
    },
    bold: {
        fontWeight: "bold",
    },
    italics: {
        fontStyle: "italic"
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
