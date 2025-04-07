import React from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, Text, View } from 'react-native'
import { User } from '../app/models/user'
import ErrorBoundary from 'react-native-error-boundary'

type Props = {
    user: User | null
}

function test(num: any): string {
    return num.toFixed(2);
}

function UserItem({ user }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                User: {user?.id}
                {user?.name}
                Price: {user?.price} bananas</Text>
        </View>
    )
}

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
    }
});

export default UserItem
