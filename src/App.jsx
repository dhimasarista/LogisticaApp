/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default App = () => {
    let [counter, setCounter] = useState(0)

    const resetCounter = () => {
        setCounter(0)
    }

    const increment = () => {
        setCounter(counter++)
    }

    return (
        <SafeAreaView style={styles.app}>
            <View style={styles.container}>
                <Text style={styles.text}>{counter}</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.buttonReset} onPress={resetCounter}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                    <Button title='+' onPress={increment}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        color: "black",
        justifyContent: "center",
    },
    container: {
        alignItems: "center"
    },
    text: {
        color: "black"
    },
    buttonReset: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 10,
        borderRadius: 10
    },

    buttonGroup: {
        justifyContent: 'space-between'
    }
})