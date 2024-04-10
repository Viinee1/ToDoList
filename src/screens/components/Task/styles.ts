import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
        container:{
            backgroundColor: '#262626',
            borderRadius: 6,
            width: 350,
            marginTop: 30,
            height: 65,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#333333',
            borderWidth: 1,
            flexDirection: 'row'
        },
        text:{
            fontSize: 16,
            color: '#F1F1F1',
            maxWidth: '70%'
        },
        deleteButton:{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 305,
            borderRadius: 6,
        },
        checkBox:{
            borderRadius: 50,
            width: 20,
            height: 20,
            borderWidth: 2,
            position: 'absolute',
            right: 310,
            borderColor: '#4EA8DE'
        },
        imageTrash:{
            width: 16,
            height: 18,
        },
        checkMark:{
            color: '#F1F1F1',
            left: 2,
            bottom: 2
        }
    }
)