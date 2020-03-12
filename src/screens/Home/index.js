import React, { useRef, useState } from 'react';
import CardItem from '../../components/CardItem';
import { FlatList, SafeAreaView, StyleSheet, View, Modal } from 'react-native';
import DATA from './mockData';

  export default function Home() {

    const [ data, setData ] = useState(DATA);
    
    const onSelect = useRef(id => {
      setData(oldData => {
        return [
          ...oldData.map(item => {
            if (id === item.id) {
              return {
                ...item,
                selected: !item.selected,
              };
            }
            return item;
          }),
        ];
      });
    });

    return (
      <View>
        <Modal           
          animationType="slide"
          transparent={false} 
          visible={true}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => 
              <View style={styles.itemStyle}>
                  <CardItem item={item} onSelect={onSelect.current} />
              </View>
          }
          keyExtractor={item => item.id}
          numColumns={3}
        />
        </SafeAreaView>
        </Modal>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    itemStyle: {
        flex: 1, 
        flexDirection: 'column', 
        margin: 10 
    }
  });


