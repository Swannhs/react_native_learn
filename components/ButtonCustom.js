import React from 'react';
import {Button, View, StyleSheet} from "react-native";

const ButtonCustom = props => {
    return (
        <View style={styles.buttonContainer}>
            <Button title={props.title} onPress={() => {
                console.log(`${props.title} is clicked`)
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100,
        margin: 3
    }
})

export default ButtonCustom;
