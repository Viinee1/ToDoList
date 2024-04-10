import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D0D0D',
        flex: 1,

    },
    textTo:{
        color: '#4EA8DE',
        fontWeight: '900',
        marginTop: 48,
        fontSize: 42,
    },
    textDo:{
        color: '#5E60CE',
        fontWeight: '900',
        marginTop: 48,
        fontSize: 42,
    },
    form:{
        marginTop: 5,
        width:'100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 175
    },
    input:{
        marginTop: 3,
        backgroundColor: '#262626',
        borderRadius: 8,
        width: '75%',
        height: '100%',
        borderColor: '#0D0D0D',
        borderWidth: 1,
        paddingLeft: 18,
        fontSize: 18,
        color: '#F2F2F2'

    },
    button: {
        marginTop: 3,
        backgroundColor: '#1E6F9F',
        width: '15%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginLeft: '1%',
      },
      
    textoBotao:{
        color: '#F2F2F2',
        fontSize: 18,
        bottom: 1
    },
    containerList:{
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    todo:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 34,
        marginBottom: 80,
    },
    listEmptyText:{
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
    },
    listEmptySubText:{
        color: '#808080',
        fontSize: 16,
    },
    formEmptyList:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    addButtonCircle:{
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 1.5,
        position: 'absolute',
        borderColor: '#F2F2F2',

    },
    textoCriadas:{
        marginLeft: 20,
        color: '#4EA8DE',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoConcluidas:{
        color: '#8284FA',
        marginLeft: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contadoresForm:{
        marginTop: 50,
        flexDirection: 'row',
        marginBottom: 20,
    },
    contadorCriadas:{
        marginLeft: 12,
        backgroundColor: '#333333',
        width: 25,
        height: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contadorConcluidas:{
        marginLeft: 12,
        backgroundColor: '#333333',
        width: 25,
        height: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    numContadores:{
        color: '#D9D9D9'
    },
    clipboard:{
        width: 70,
        height: 70,
        marginBottom: 15
    },
    rocket:{
        marginTop: 65,
        marginRight: 10,
        height: 32,
        width: 20,
    }




})
