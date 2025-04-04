import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { withDelay } from 'react-native-reanimated';
import {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const Gestures = () => {
    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0 });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
                { scale: withSpring(isPressed.value ? 1.2 : 1) },
            ],
            backgroundColor: isPressed.value ? 'violet' : 'lightblue',
            opacity: isPressed.value ? 0.5 : 1,
        };
    });

    const start = useSharedValue({ x: 0, y: 0 });
    const gesture = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
        })
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            };
        })
        .onEnd(() => {
            // start.value = {
            //     x: offset.value.x,
            //     y: offset.value.y,
            // };
        })
        .onFinalize(() => {
            isPressed.value = false;

            if (offset.value.x > 0)
                offset.value.x = withSpring(500);
            else
                offset.value.x = withSpring(-500);

            offset.value = withDelay(3000, withSpring({ x: 0, y: 0 }));
            start.value = { x: 0, y: 0 };
        });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.ball, animatedStyles]} />
        </GestureDetector>
    )
}

export default Gestures

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
    ball: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
    },
})