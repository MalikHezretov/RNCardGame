import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000'
    },
    contentStyle: {
        fontSize: 14,
        textAlign: 'center'
    }
});

export default CardItem = (props) => {
    return(
        <TouchableOpacity onPress={props.onSelectCard} style={styles.container, {backgroundColor: props.selected ? '#fff' : '#addde6'}}>
            <Text style={styles.contentStyle, {color: props.selected ? '#000' : '#fff',}}>{props.name}</Text>
        </TouchableOpacity>
    )
}