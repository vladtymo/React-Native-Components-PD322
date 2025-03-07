import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../models/products';

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
                <Text>Products</Text>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>{item.title}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Lists

const styles = StyleSheet.create({
    // text: {
    //     fontSize: 28,
    // }
})