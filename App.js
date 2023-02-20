import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Switch } from 'react-native';
import Calculator from "./components/Calculator.js";
import Styles from "./styles/Styles.js";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);
  
  const containerStyle = [Styles.container, isDarkMode && Styles.darkModeContainer];
  const textStyle = [Styles.text, isDarkMode && Styles.darkModeText];
  const innerContainerStyle = [Styles.innerContainer, isDarkMode && Styles.darkModeInnerContainer];
  
  
  
  return (

    <View style={containerStyle}>
      <Switch value={isDarkMode} onValueChange={toggleSwitch} />
      <Text style={textStyle}>Alcometer</Text>
      <StatusBar style="auto" />
      <Calculator isDarkMode={isDarkMode} innerContainerStyle={innerContainerStyle} textStyle={textStyle}/>
    </View>
  );
}
