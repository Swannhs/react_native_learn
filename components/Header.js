import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        paddingTop: 36,
        backgroundColor: '#2451d7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#e1b850'
    }
})

export default Header;
