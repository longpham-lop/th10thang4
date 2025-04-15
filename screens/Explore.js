import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const categories = [
  { title: 'Fresh Fruits & Vegetable', image: require('../assets/fruit.png') },
  { title: 'Cooking Oil & Ghee', image: require('../assets/oil.png') },
  { title: 'Meat & Fish', image: require('../assets/meat.png') },
  { title: 'Bakery & Snacks', image: require('../assets/bakery.png') },
  { title: 'Dairy & Eggs', image: require('../assets/dairy.png') },
  { title: 'Beverages', image: require('../assets/beverages.png') },
];

export default function ExploreScreen({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Find Products</Text>
  
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search Store" />
          <Feather name="search" size={20} color="gray" />
        </View>
  
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.box} 
              onPress={() => {
                if (item.title === 'Beverages') {
                  navigation.navigate('Beverages');
                }
              }}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    top: 40,
    left: 130,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '47%',
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 10,
    margin: 16,
    top: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
});