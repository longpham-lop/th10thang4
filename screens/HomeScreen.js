import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import products from '../assets/data.js';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  // Lọc sản phẩm theo tên nhập vào
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Logo & Location */}
      <Image style={styles.imageSource} source={require('../assets/carrot.png')} />
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={20} color="#4CAF50" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Feather name="search" size={20} color="gray" />
      </View>

      <ScrollView>
        {/* Banner */}
        <Image style={styles.banner} source={require('../assets/banner.png')} />

        {/* Exclusive Offer (hiển thị kết quả tìm kiếm ở đây) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {filteredProducts.map((product) =>
            renderProduct(product, navigation)
          )}
        </ScrollView>

        {/* Besst Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {filteredProducts.map((product) =>
            renderProduct(product, navigation)
          )}
        </ScrollView>
        
        <View>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.name}
                style={styles.categoryCard}
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                }
              >
                <Image style={styles.categoryImage} source={product.image} />
                <Text style={styles.categoryText}>{product.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        <View>
          <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {filteredProducts.map((product) =>
            renderProduct(product, navigation)
          )}
        </ScrollView>
        </View>
        {/* Bottom Navigation */}
        <View style={styles.bottomMenu}>
          {renderMenuIcon('home', 'Shop', true, navigation)}
          {renderMenuIcon('search', 'Explore', false, navigation)}
          {renderMenuIcon('shopping-cart', 'Cart', false, navigation)}
          {renderMenuIcon('hearto', 'Favourite', false, navigation)}
          {renderMenuIcon('user', 'Account', false, navigation)}
        </View>
      </ScrollView>
    </View>
  );
}

function renderProduct(product, navigation) {
  return (
    <View style={styles.productCard} key={product.name}>
      <Image style={styles.productImage} source={product.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('ProductDetail', {
            name: product.name,
            price: product.price,
            image: product.image,
          })
        }
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

function renderMenuIcon(iconName, label, active = false, navigation) {
  let iconComponent;

  switch (label) {
    case 'Shop':
      iconComponent = <Feather name="shopping-bag" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Explore':
      iconComponent = <Feather name="search" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Cart':
      iconComponent = <Feather name="shopping-cart" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Favourite':
      iconComponent = <AntDesign name="hearto" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Account':
      iconComponent = <Feather name="user" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    default:
      iconComponent = <Feather name="home" size={20} color={active ? '#4CAF50' : 'gray'} />;
  }

  const handlePress = () => {
    if (label === 'Explore') navigation.navigate('Explore');
    if (label === 'Shop') navigation.navigate('Home');
    if (label === 'Cart') navigation.navigate('Cart');
    if (label === 'Favourite') navigation.navigate('Favourite');
    if (label === 'Account') navigation.navigate('Account');
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
      {iconComponent}
      <Text style={[styles.menuLabel, active && { color: '#4CAF50' }]}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    left: 114,
    top: 20,
  },
  locationText: {
    marginLeft: 8,
    fontWeight: '500',
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
  banner: {
    width: '90%',
    height: 140,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  seeAll: {
    color: '#4CAF50',
  },
  horizontalList: {
    paddingLeft: 16,
    paddingVertical: 10,
  },
  productCard: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 6,
  },
  productPrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryList: {
    paddingLeft: 16,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4E9', 
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#4C4C4C',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 20, 
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
   
  },
  menuItem: {
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  imageSource: {
    position: 'absolute',
    top: 20,
    left: 200,
  
  },
});




