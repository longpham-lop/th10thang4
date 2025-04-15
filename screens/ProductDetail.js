import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function ProductDetail({ route }) {
  const [quantity, setQuantity] = useState(1);

  // Dữ liệu từ HomeScreen truyền qua
  const { name, price, image } = route.params || {
    name: 'Naturel Red Apple',
    price: '$4.99',
    image: require('../assets/apple.png'),
  };

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.infoBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>

        <View style={styles.quantityRow}>
          <TouchableOpacity onPress={decrement} style={styles.quantityBtn}>
            <AntDesign name="minus" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increment} style={styles.quantityBtn}>
            <AntDesign name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.detailTitle}>Product Detail</Text>
          <Text style={{ color: 'gray' }}>
            Apple là loại trái cây rất tốt cho sức khỏe. Chứa nhiều vitamin và chất xơ tự nhiên.
          </Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.detailTitle}>Review</Text>
          <View style={styles.reviewStars}>
            {Array(5).fill().map((_, i) => (
              <AntDesign key={i} name="star" size={18} color="#FFD700" />
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.addToBasket}>
          <Text style={styles.addToBasketText}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fdf6f1',
  },
  infoBox: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    color: '#53B175',
    fontWeight: '600',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  quantityBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: '500',
  },
  detailBox: {
    marginTop: 16,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  reviewStars: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  addToBasket: {
    backgroundColor: '#53B175',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  addToBasketText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
