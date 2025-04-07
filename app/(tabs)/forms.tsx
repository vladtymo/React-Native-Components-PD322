import { Platform, Image, SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, Pressable, Alert, Button, Modal, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';
import CreateProductForm from '../../components/CreateProductForm';
import TestModal from '../../components/TestModal';
import TitleComponent from '../../components/TitleComponent';

export default function Forms() {

    // [name, setterName] = useState(initialValue)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [len, setLen] = useState(0);

    const showAlert = () => {
        Alert.alert('Hello World!', 'Do you want to change color?', [
            {
                text: 'No',
                style: 'destructive',
            },
            { text: 'OK', onPress: () => setIsDarkMode(!isDarkMode) },
        ]);
    }

    return (
        <View style={{
            ...styles.container,
            backgroundColor: isDarkMode ? 'black' : 'white'
        }}>
            <SafeAreaView style={styles.safe}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <Pressable onPress={showAlert}>
                    <Image style={styles.image} source={require('../../assets/icon.png')} />
                </Pressable>
                <TextInput onChangeText={text => setLen(text.length)}></TextInput>
                <Text>Lenght: {len}</Text>
                <TitleComponent />
                <Pressable onPress={() => alert("Hi!")}>
                    <Text style={styles.btn}>Push Me</Text>
                </Pressable>
                <Button
                    title='Open Modal' onPress={() => { setModalVisible(true) }}>
                </Button>
                <Button
                    title='Open Form' onPress={() => { setModalVisible(true) }}>
                </Button>
                {/* <CreateProductForm initialEmail={route.params.initialEmail} /> */}
            </SafeAreaView>

            <Button
                title='About'
            // onPress={() =>
            //      navigation.navigate("About")
            // } 
            />

            <TestModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </View>
    );
}


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safe: {
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    image: {
        height: 100,
        width: "auto"
    },
    btn: {
        margin: 8,
        padding: 8,
        borderRadius: 12,
        backgroundColor: width > 400 ? 'darkblue' : "gray",
        color: "white",
        fontSize: 16,
        textAlign: "center",
        ...Platform.select({
            android: {
                color: "black"
            },
            ios: {
                color: "white"
            }
        })
    },
});
