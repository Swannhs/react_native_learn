import React from 'react';
import {Button, View, StyleSheet} from "react-native";

const ButtonCustom = props => {
    const onButtonPress = props => {
        props.onButtonClicked(props);
    }
    return (
        <View style={styles.buttonContainer}>
            <Button title={props.title} onPress={() => {
                onButtonPress(props);
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
