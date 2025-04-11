// src/screens/ProductDetailScreen.tsx
import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { Product } from '../types/Product';

interface ProductDetailScreenProps {
    route: {
      params: {
        product: Product;
      };
    };
  }

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { product } = route.params;
  const relatedProducts = useAppSelector((state) =>
    (state.products.items as Product[]).filter(
        (p) => p.category?.id === product.category?.id && p.id !== product.id
    )
  );
  

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.title}</Text>
      <Text style={{ fontSize: 18, color: '#888' }}>${product.price}</Text>
      <Text style={{ marginVertical: 8 }}>{product.description}</Text>

      <ScrollView horizontal pagingEnabled style={{ height: 300 }}>
        {product.images.map((img: string, index: number) => (
          <View key={index} style={{ width: 300, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Image ALT text</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Related Products</Text>
      <FlatList
        data={relatedProducts}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginRight: 12, marginTop: 8 }}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default ProductDetailScreen;
