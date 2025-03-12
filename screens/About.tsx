import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AboutScreenProps, HomeScreenProps } from './types'

const Home = ({ navigation }: AboutScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button
                title='Go Back Home'
                onPress={() =>
                    navigation.popToTop()
                } />
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