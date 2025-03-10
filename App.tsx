import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Controller, useForm } from 'react-hook-form';

export default function CreateProductForm() {

    const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            lang: "",
            email: "",
        },
    })

    const onSubmit = () => {
        Alert.alert(
            "Data",
            `Lang: ${selectedLanguage}`
        )
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


            <Switch>

            </Switch>
            <Button title='Submit' onPress={onSubmit}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 10
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    input: {
        backgroundColor: "lightgray",
        padding: 10,
        minWidth: 200,
        color: 'white',
        fontSize: 18,
    }
})
