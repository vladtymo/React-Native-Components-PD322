import React, { useEffect, useState } from 'react'
import { FlatList, Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
// import { addItem, getItems, init } from '../../store/db';
import { Item } from '../../models/item';

import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../../drizzle/migrations';
import { usersTable } from '../../store/schema';

const expo = SQLite.openDatabaseSync('items2.db');
const db = drizzle(expo);

const Home = () => {
    const { success, error } = useMigrations(db, migrations);
    const [items, setItems] = useState<typeof usersTable.$inferSelect[] | null>(null);

    // const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (!success) return;

        loadItems();

    }, [success]);

    const loadItems = async () => {
        setItems(await db.select().from(usersTable));
        console.log("loading...");
    }

    const addItemHandle = async () => {
        // setItems([...items, text]);
        // await addItem(text);

        await db.insert(usersTable).values({ name: text });
        loadItems();
        console.log("added...");
    }

    const clearHandle = async () => {
        await db.delete(usersTable);
        loadItems();
    }

    if (error) {
        return (
            <View>
                <Text>Migration error: {error.message}</Text>
            </View>
        );
    }
    if (!success) {
        return (
            <View>
                <Text>Migration is in progress...</Text>
            </View>
        );
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