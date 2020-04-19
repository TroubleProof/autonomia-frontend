import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        // alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        padding: 25,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        alignItems: "center",
        justifyContent: "center"
    },

    form: {
        marginTop: 20,
        // flex: 1,
        // width: "100%"
    },

    form__input: {
        backgroundColor: "#FAFAFA",
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 8,
        height: 55,
        marginBottom: 20,
        paddingHorizontal: 15,
        width: "100%"
    }
});

export default styles;