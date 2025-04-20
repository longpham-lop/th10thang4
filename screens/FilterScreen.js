// screens/FilterScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function FilterScreen() {
  const navigation = useNavigation();

  const [selectedCategories, setSelectedCategories] = useState(['Eggs']);
  const [selectedBrands, setSelectedBrands] = useState(['Cocola']);

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
      </View>

      <ScrollView style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'].map(cat => (
          <TouchableOpacity key={cat} style={styles.option}
            onPress={() => toggleItem(cat, selectedCategories, setSelectedCategories)}>
            <Ionicons
              name={selectedCategories.includes(cat) ? 'checkbox' : 'square-outline'}
              size={20}
              color={selectedCategories.includes(cat) ? 'green' : '#888'}
            />
            <Text style={[styles.optionText, selectedCategories.includes(cat) && { color: 'green' }]}>{cat}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Brand</Text>
        {['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'].map(brand => (
          <TouchableOpacity key={brand} style={styles.option}
            onPress={() => toggleItem(brand, selectedBrands, setSelectedBrands)}>
            <Ionicons
              name={selectedBrands.includes(brand) ? 'checkbox' : 'square-outline'}
              size={20}
              color={selectedBrands.includes(brand) ? 'green' : '#888'}
            />
            <Text style={[styles.optionText, selectedBrands.includes(brand) && { color: 'green' }]}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center',top: 30 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 10,left:140 },
  sectionTitle: { fontSize: 50, fontWeight: 'bold', marginVertical: 10 },
  option: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  optionText: { marginLeft: 10, fontSize: 15 },
  applyButton: {
    backgroundColor: '#4CAF50', padding: 15,
    borderRadius: 10, alignItems: 'center', marginTop: 10
  },
  applyText: { color: '#fff', fontWeight: 'bold' }
});
