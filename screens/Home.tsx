import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { HomeScreenProps } from './types'

const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title='Go to Forms'
                onPress={() =>
                    navigation.navigate("Forms", { initialEmail: "example@ukr.net" })
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