import { Platform, Image, SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, Pressable, Alert, Button, Modal, ScrollView } from 'react-native';
import TitleComponent from './components/TitleComponent';
import { useState } from 'react';
import TestModal from './components/TestModal';

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
   <View style={styles.container}>
            <Text style={styles.text}>Create New Product</Text>

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={{ ...styles.input, ...styles.text }} />
                )}
            />
            
            <Controller
                control={control}
                name="lang"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={setSelectedLanguage}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Python" value="py" />
                        <Picker.Item label="Ruby" value="rb" />
                        <Picker.Item label="Perl" value="pl" />
                        <Picker.Item label="Kotlin" value="kot" />
                        <Picker.Item label="PHP" value="php" />
                    </Picker>
                )}
            />


            <Switch />
            <Button title='Submit' onPress={onSubmit}></Button>
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
});
