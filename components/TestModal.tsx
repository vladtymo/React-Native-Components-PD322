import { Button, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TestModalProps = {
    visible: boolean,
    onClose: () => void
}

const TestModal = ({ visible, onClose }: TestModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
            <SafeAreaView style={styles.modalContainer}>
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet.</Text>
                    <Button title="Close" onPress={onClose}></Button>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

export default TestModal

const styles = StyleSheet.create({
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
})
