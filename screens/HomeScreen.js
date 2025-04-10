import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Fresh Apple", price: "$2.5", image: require("../assets/carot.png") },
  { id: "2", name: "Banana", price: "$1.2", image: require("../assets/carot.png") },
  { id: "3", name: "Carrot", price: "$1.8", image: require("../assets/carot.png") },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Hello, User 👋</Text>

      {/* Ô tìm kiếm */}
      <TextInput style={styles.searchBox} placeholder="Search for groceries..." />

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBox: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  product: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    flex: 1,
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: "gray",
  },
  buyButton: {
    backgroundColor: "#53B175",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyText: {
    color: "#fff",
  },
});

export default HomeScreen;
