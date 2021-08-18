import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import Card from "../components/Card";
import ButtonCustom from "../components/ButtonCustom";
import TextInputCustom from "../components/TextInputCustom";

const StartScreen = props => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Enter a number</Text>

                    <TextInputCustom/>

                    <View style={styles.buttonContainer}>
                        <ButtonCustom title='reset'/>
                        <ButtonCustom title='confirm'/>
                    </View>

                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        maxWidth: 250,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 100
    },
    title: {
        fontSize: 30,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})

export default StartScreen;
