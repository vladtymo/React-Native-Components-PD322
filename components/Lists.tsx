import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../models/products';
import ProductCard from './ProductCard';

const api = "https://fakestoreapi.com/products";

const Lists = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await axios.get<Product[]>(api);
        setProducts(response.data);
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Products</Text>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductCard item={item} />}
                // initialNumToRender={1}
                // ItemSeparatorComponent={() => (
                //     <View style={{ height: 10, borderRadius: 12, backgroundColor: 'black' }} />
                // )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Lists

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24
    }
})