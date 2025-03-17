import React, { useEffect, useState } from 'react'
import { FlatList, Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import { addItem, getItems, init } from '../../store/db';
import { Item } from '../../models/item';

const Home = () => {

    const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        loadItems();
        console.log("loading...");

    }, []);

    const loadItems = async () => {

        init();

        setItems((await getItems()).map(x => x.value));
        console.log("loading...");
    }

    const addItemHandle = async () => {
        setItems([...items, text]);
        await addItem(text);
        console.log("added...");
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
            <FlatList
                data={items}
                renderItem={({ item }) => <Text>{item}</Text>}
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