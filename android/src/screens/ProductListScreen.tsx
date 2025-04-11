// src/screens/ProductListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/slices/productSlice';
import { Product } from '../types/Product';

const ProductListScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.products);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = items.filter((product: any) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search products..."
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      {status === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Product }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
              style={{ paddingVertical: 12 }}
            >
              <View key={item.id} style={{ marginBottom: 20 }}>
                <Text>Product image ALT text</Text>
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
                <Text>{item.category.name}</Text>
              </View>

            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default ProductListScreen;
