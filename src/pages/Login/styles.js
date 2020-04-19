import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        padding: 25,
        paddingTop: Constants.statusBarHeight + 20
    },

    main: {
        marginTop: 20,
        width: "100%"
    },

    main__input: {
        backgroundColor: "#FAFAFA",
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 8,
        height: 55,
        marginBottom: 20,
        paddingHorizontal: 15,
        width: "100%"
    },

    main__textForgot: {
        alignSelf: "flex-end",
        color: "#4C1B72",
        fontSize: 15
    },

    main__button: {
        alignItems: "center",
        backgroundColor: "#4C1B72",
        borderRadius: 8,
        justifyContent: "center",
        height: 55,
        marginTop: 60,
        width: "100%"
    },

    registerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    registerWrapper__text: {
        marginRight: 2,
        color: "#8E8E8E",
        fontSize: 15
    },

    registerWrapper__button: {
        flexDirection: "row",
        alignItems: "center"
    },

    registerWrapper__textRegister: {
        marginRight: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: "#4C1B72"
    }
});

export default styles;