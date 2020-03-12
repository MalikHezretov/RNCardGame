import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentStyle: {
        fontSize: 30,
    }
});

export default CardItem = (props) => {
    return(
        <TouchableOpacity onPress={props.onSelectCard} style={[styles.container, {backgroundColor: props.selected ? '#ffcccb' : '#0080FF'}]}>
            <Text style={[styles.contentStyle, {color: props.selected ? '#000' : '#fff'}]}> {props.selected ? props.name : '?'}</Text>
        </TouchableOpacity>
    )
}