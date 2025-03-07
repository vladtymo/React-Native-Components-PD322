import { Platform, Image, SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, Pressable, Alert, Button, Modal, ScrollView } from 'react-native';
import TitleComponent from './components/TitleComponent';
import { useState } from 'react';

const QUESTIONS = [
]

export default function App() {

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
          <Image style={styles.image} source={require('./assets/icon.png')} />
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
      </SafeAreaView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur perferendis numquam asperiores consectetur ea cupiditate aliquid corporis, deserunt, placeat, sequi laborum nostrum voluptate odio quisquam. Dolore odio explicabo amet nam ad vero, quam rerum delectus pariatur illum aspernatur doloribus magni perferendis facere enim a illo iusto quas molestias iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis accusamus aliquid corrupti praesentium, quas eaque molestiae quam, consequuntur quod doloribus neque obcaecati ad nulla laboriosam doloremque perferendis fuga aut!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
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
  },
  btn: {
    margin: 8,
    padding: 8,
    borderRadius: 12,
    backgroundColor: "darkblue",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
  }
});
