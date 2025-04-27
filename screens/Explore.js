import React, { useState } from 'react';
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
import products from '../assets/product.js'; 
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { title: 'Fresh Fruits & Vegetable', image: require('../assets/fruit.png') },
  { title: 'Cooking Oil & Ghee', image: require('../assets/oil.png') },
  { title: 'Meat & Fish', image: require('../assets/meat.png') },
  { title: 'Bakery & Snacks', image: require('../assets/bakery.png') },
  { title: 'Dairy', image: require('../assets/dairy.png') },
  { title: 'Beverages', image: require('../assets/beverages.png') },
];

export default function ExploreScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
            <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate('Home'); 
          }
        }}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity>

      <Text style={styles.title}>Find Products</Text>

      {/* Search Bar */}
            <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="gray" style={{ marginRight: 6 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Feather name="x" size={18} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {/* Nút filter */}
        <TouchableOpacity
          onPress={() => navigation.navigate('FilterScreen')}
          style={styles.filterButton}
        >
          <Ionicons name="options-outline" size={22} color="#53B175" />
        </TouchableOpacity>

      </View>


      {/* Danh mục */}
      {filteredCategories.length > 0 && (
        <View style={styles.grid}>
          {filteredCategories.map((item, index) => (
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
      )}

      {/* Danh sách sản phẩm */}
      {filteredProducts.length > 0 && (
        <View>
          <Text style={styles.subTitle}>Products</Text>
          <View style={styles.productContainer}>
            {filteredProducts.map((item, index) => (
              <View key={index} style={styles.productCard}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                  style={{ alignItems: 'center' }}
                >
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDetails}>4pcs, Price</Text>
                  <Text style={styles.productPrice}>${item.price}</Text>
                  
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.plusButton}
                  onPress={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                >
                  <Text style={styles.plusIcon}>＋</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      )}
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
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 44,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
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
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '47%',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  productDetails: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
    fontWeight: 'bold',
  },
  plusButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#53B175',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 12,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 16,
    top: 770,
  },
  
});
