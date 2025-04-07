import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { User } from '../models/user';
import useUserData from '../hooks/useUserData';
import UserItem from '../../components/UserIItem';

const USERS: User[] = [
    { id: 1, name: 'Jane Doe', price: 20 },
    { id: 3, name: 'Luda Kik', price: 40 },
]

const Home = () => {
    const user = useUserData(2);
    const [users, setUsers] = useState<User[]>(USERS);

    useEffect(() => {
        if (user) {
            setUsers([...users, user]);
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
            <Button title='Go Back Home' />
            {users.map((user) => (
                // <ErrorBoundary FallbackComponent={CustomFallback} onError={(error) => console.log(error)} key={user.id}>
                <UserItem key={user.id} user={user} />
                // </ErrorBoundary>
            ))}
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