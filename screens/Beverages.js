import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const beverages = [
    { id: '1', name: 'Diet Coke', size: '355ml', price: 1.99, image: require('../assets/a.png') },
    { id: '2', name: 'Sprite Can', size: '325ml', price: 1.50, image: require('../assets/b.png') },
    { id: '3', name: 'Apple & Grape Juice', size: '2L', price: 15.99, image: require('../assets/c.png') },
    { id: '4', name: 'Orange Juice', size: '2L', price: 15.99, image: require('../assets/d.png') },
    { id: '5', name: 'Coca Cola Can', size: '325ml', price: 4.99, image: require('../assets/e.png') },
    { id: '6', name: 'Pepsi Can', size: '330ml', price: 4.99, image: require('../assets/f.png') },
  ];
  

export default function BeveragesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.size}, Price: {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beverages</Text>
      <FlatList
        data={beverages}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    top: 30,
    left: 140,
  },
  item: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  details: {
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});