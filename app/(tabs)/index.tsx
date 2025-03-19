import React, { useEffect, useState } from 'react'
import { FlatList, Button, StyleSheet, Text, View, TextInput } from 'react-native'
// import { addItem, getItems, init } from '../../store/db';

import { drizzle } from 'drizzle-orm/expo-sqlite';
import { usersTable } from '../../store/schema';
import { useSQLiteContext } from 'expo-sqlite';

import * as schema from '../../store/schema';

const Home = () => {
    // const { success, error } = useMigrations(db, migrations);
    const db = drizzle(useSQLiteContext(), { schema });

    const [items, setItems] = useState<schema.Task[] | null>(null);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        setItems(await db.select().from(usersTable));
    }

    const addItemHandle = async () => {
        await db.insert(usersTable).values({ name: text });
        loadItems();
    }

    const clearHandle = async () => {
        await db.delete(usersTable);
        loadItems();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>

            <Text>Name: </Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <Button
                title='Add New Item'
                onPress={addItemHandle}
            />
            <Button
                title='Clear'
                onPress={clearHandle}
            />
            <FlatList
                data={items}
                renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
            ></FlatList>
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
    input: {
        height: 40,
        fontSize: 18,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: "black",
        minWidth: 300,
    },
    label: {
        fontSize: 12,
        color: "black",
        marginBottom: 4,
    },
})