import {
    StyleSheet
} from "react-native";

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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },

    header__logo: {
        width: 80,
        height: 80,
    },

    footer: {
        width: "100%"
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

    footer__textBtn: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },

    footer__loginBtn: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "center"
    },

    footer__text: {
        marginRight: 2,
        color: "#8E8E8E",
        fontSize: 15
    },

    footer__textLogin: {
        marginRight: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: "#4C1B72"
    },
});

export default styles;