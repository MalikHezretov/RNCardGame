import React, { useMemo } from 'react';
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

export default function CardItem({item: {id, title, selected}, onSelect}) {
    return useMemo(() => {
      console.log('item is rendering ===', id);
      return (
        <TouchableOpacity 
            onPress={() => onSelect(id)} 
            style={[styles.container, {backgroundColor: selected ? '#ffcccb' : '#0080FF'}]}
        >
            <Text style={[styles.contentStyle, {color: selected ? '#000' : '#fff'}]}>
                {title}
            </Text>
        </TouchableOpacity>
      );
    }, [selected]);
  }