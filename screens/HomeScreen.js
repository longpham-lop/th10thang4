import React from 'react';
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

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Logo + Location */}
      <Image style={styles.imageSource} source={require('../assets/carrot.png')} />
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={20} color="#4CAF50" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search Store" />
        <Feather name="search" size={20} color="gray" />
      </View>

      <ScrollView>
        {/* Banner */}
        <Image style={styles.banner} source={require('../assets/banner.png')} />

        {/* Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Organic Bananas', '$4.99', require('../assets/banana.png'), navigation)}
          {renderProduct('Red Apple', '$4.99', require('../assets/apple.png'), navigation)}
          {renderProduct('Tomato', '$4.99', require('../assets/tomatoes.png'), navigation)}
        </ScrollView>

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Ginger', '$4.99', require('../assets/ginger.png'), navigation)}
          {renderProduct('Beef Bone', '$4.99', require('../assets/beef.png'), navigation)}
          {renderProduct('Broiler Chicken', '$4.99', require('../assets/chicken.png'), navigation)}
        </ScrollView>

        {/* Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
          {renderCategory('Pulses', require('../assets/dal.png'))}
          {renderCategory('Rice', require('../assets/rice.png'))}
          {renderCategory('Flour')}
          {renderCategory('Spices')}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Dal Masoor', '$2.99', require('../assets/dal.png'), navigation)}
          {renderProduct('Rice Premium', '$3.49', require('../assets/rice.png'), navigation)}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomMenu}>
        {renderMenuIcon('home', 'Shop', true, navigation)}
        {renderMenuIcon('search', 'Explore', false, navigation)}
        {renderMenuIcon('shopping-cart', 'Cart', false, navigation)}
        {renderMenuIcon('hearto', 'Favourite', false, navigation)}
        {renderMenuIcon('user', 'Account', false, navigation)}
      </View>
    </View>
  );
}

// Render sản phẩm
function renderProduct(name, price, image, navigation) {
  return (
    <View style={styles.productCard} key={name}>
      <Image style={styles.productImage} source={image} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ProductDetail', { name, price, image })}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Render danh mục
function renderCategory(title, image = null) {
  return (
    <View style={styles.categoryCard} key={title}>
      {image && <Image source={image} style={styles.categoryImage} />}
      <Text style={styles.categoryText}>{title}</Text>
    </View>
  );
}

// Render icon menu
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
