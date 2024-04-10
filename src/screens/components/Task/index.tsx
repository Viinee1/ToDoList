import { View, Text, Pressable, Image } from 'react-native'
import { styles } from './styles'
import { useState } from 'react';



type Props = {
    description: string;
    onRemove: () => void;
    onToggleCheckbox: (isChecked: boolean) => void;
}


export function Task({ description, onRemove, onToggleCheckbox }: Props) {
    const [checked, setChecked] = useState(false);
    const [removeIsPressed, setRemoveIsPressed] = useState(false)
    const [checkBoxIsPressed, setCheckBoxIsPressed] = useState(false)

    const toggleCheckbox = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        // Passa o estado atualizado da checkbox
        onToggleCheckbox(newChecked);
    };

    return (
        <View style={styles.container}>
            <Text style={[
                styles.text,
                {
                    textDecorationLine: checked ? 'line-through' : 'none',
                    color: checked ? '#808080' : '#F1F1F1'
                }
            ]}>
                {description}
            </Text>
            <Pressable 
            onPress={onRemove}
            onPressIn={() => setRemoveIsPressed(true)}
            onPressOut={() => setRemoveIsPressed(false)}
            style={[
                styles.deleteButton,
                {
                    backgroundColor: removeIsPressed ? '#333333' : 'transparent'
                }
            ]}
            >
                <Image 
                source={removeIsPressed ? require('../images/lixohandle.png') : require('../images/lixo.png') } style={styles.imageTrash} />

            </Pressable>
            <Pressable 
            onPress={toggleCheckbox} 
            onPressIn={() => setCheckBoxIsPressed(true)}
            onPressOut={() => setCheckBoxIsPressed(false)}
            style={[
                styles.checkBox,
                {
                    borderColor: checked ? (checkBoxIsPressed ? '#8284FA' : '#5E60CE') : (checkBoxIsPressed ? '#1E6F9F' : '#4EA8DE'),
                    backgroundColor: checked ? (checkBoxIsPressed ? '#8284FA' : '#5E60CE') : (checkBoxIsPressed ? '#1E6F9F' :'transparent')
                    
                },
            ]}
            >
                <Text style={styles.checkMark} >
                    {checked ? '✓' : ''}
                </Text>
            </Pressable>
        </View>
    );
}

