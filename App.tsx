import { Platform, Image, SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, Pressable, Alert } from 'react-native';
import TitleComponent from './components/TitleComponent';
import { useState } from 'react';

const QUESTIONS = [
]

export default function App() {

  // [name, setterName] = useState(initialValue)
  const [isDarkMode, setIsDarkMode] = useState(true);
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
          <Image style={styles.image} source={require('./assets/icon.png')} />
        </Pressable>
        <TextInput onChangeText={text => setLen(text.length)}></TextInput>
        <Text>Lenght: {len}</Text>
        <TitleComponent />
      </SafeAreaView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  image: {
    height: 100,
    width: "auto"
  }
});
