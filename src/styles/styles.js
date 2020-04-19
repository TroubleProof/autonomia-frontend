import {StyleSheet, Dimensions} from 'react-native'
import { addListener } from 'expo/build/Updates/Updates'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF"
    },
    mainText: {
        textAlign: "center",
        color: "#4c1b72",
        fontSize: 34,
        fontWeight: "bold"
    },
    secondaryText: {
        textAlign: "right",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        color: "#4c1b72",   
    },
    inputs: {
        marginTop: 50,
        alignItems: "center",
        width: width
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: "80%",
        height: 55,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        marginTop: 50,
        backgroundColor: "#4c1b72",
        borderRadius: 5,
        width: "80%",
        height: 60,
        marginBottom: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        flexDirection: 'row',
        width: "100%", 
        height: 100, 
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    searchInput:{
        marginTop: "7%",
        flex: 1,
        //width: "70%",
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        textShadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
        margin: 15
    },
    item: {
        margin: 15,
        borderRadius: 10,
        height: 100,
        width: "90%",
        borderWidth: 1
    },
    foto: {
        backgroundColor: "grey",
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10
    },
    card: {
        flexDirection: "row",

    },
    footerCard: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
  })

export default styles