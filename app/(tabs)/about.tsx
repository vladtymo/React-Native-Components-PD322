import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { User } from '../models/user';
import useUserData from '../hooks/useUserData';

const Home = () => {
    const user = useUserData(2);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button title='Go Back Home' />
            <Text style={styles.text}>User: {user?.id} {user?.name}</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20,
        gap: 10
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
})