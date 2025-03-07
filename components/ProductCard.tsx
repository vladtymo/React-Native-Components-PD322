import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../models/products'

type ProductCardProps = {
    item: Product
}

const ProductCard = ({ item }: ProductCardProps) => {
    return (
        <View>
            <Text>ProductCard</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({})