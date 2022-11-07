const { StyleSheet } = require("react-native");

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }, 
    containerContato: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    containerSobre: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    espaco: {
        margin: 10
    },
    inputs: {
        margin: 10,
        width: 350
    },
    botaohome: {
        margin: 10
    },
    radios: {
        display: 1,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center'
    },
    nightmode: {
        display: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    pairadio: {
        display: 1,
        flexDirection: "row",
        alignItems: "center"
    }
});