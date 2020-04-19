import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        padding: 24,
        justifyContent: "space-between"
    },

    header: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
        width: "100%"
    },

    header__img: {
        width: 94,
        height: 97
    },

    header__text: {
        color:"#4c1b72",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "right"
    },

    footer: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },

    banner: {
        width: 315,
        height: 270
    },

    footer__button: {
        backgroundColor: "#4C1B72",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        borderRadius: 8,
        width: "100%",
        marginBottom: 20
    },

    footer__text: {
        marginLeft: 10,
        fontSize: 15,
        color: "#8E8E8E",
        fontWeight: "500"
    },

    footer__textBtn: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
})

export default styles;