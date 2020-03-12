import React from 'react';
import CardItem from '../../components/CardItem';
import { FlatList, SafeAreaView, StyleSheet, View, Modal } from 'react-native';
import DATA from './mockData';

  export default function Home() {
    return (
      <View>
        <Modal           
          animationType="slide"
          transparent={false} 
          visible={true}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => 
              <View style={styles.itemStyle}>
                  <CardItem selected={false} name={item.title} />
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


