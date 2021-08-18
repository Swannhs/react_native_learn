import React from "react";
import {View, StyleSheet} from "react-native";
import Header from './components/Header';
import StartScreen from "./screens/StartScreen";

function App(){
  return(
      <View style={styles.screen}>
        <Header title='A simple game'/>
          <StartScreen/>
      </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default App;
