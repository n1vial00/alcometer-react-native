import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from "../styles/Styles.js";

export default function Calculator({ isDarkMode , textStyle , innerContainerStyle}) {

    const [bottle, onChangeBottle] = React.useState(0);

    const [weight, onChangeWeight] = React.useState(0);

    const [hour, onChangeHours] = React.useState(0);

    const [gender, setGender] = React.useState("male");

    const [finalResult, setFinalResult] = React.useState(0);


    function handle(e) {
        e.preventDefault();
        let liters = bottle * 0.33;
        let grams = liters * 8 * 4.5;
        let burning = weight / 10;
        let gramsLeft = grams - (burning * hour);
        let result = 0;
        
        if(gramsLeft < 0) {
          gramsLeft = 0
        }
    
        switch (gender) {
          case "male":
            result = (gramsLeft / (weight * 0.7));
            break;
          case "female":
            result = (gramsLeft / (weight * 0.6));
            break;
        }
        setFinalResult(result.toFixed(2));
      }

    return (
        <View>
            <View style={[Styles.innerContainer, isDarkMode && Styles.darkModeInnerContainer]}>
                <Text style={textStyle}>Bottles: </Text>
                <TextInput
                    onChangeText={onChangeBottle}
                    value={bottle}
                    keyboardType="numeric"
                    style={textStyle}
                />
            </View>
            <TextInput
                onChangeText={onChangeWeight}
                value={weight}
                keyboardType="numeric"
                style={textStyle}
            />

            <TextInput
                onChangeText={onChangeHours}
                value={hour}
                keyboardType="numeric"
                style={textStyle}
            />
            <View>
                <Text style={textStyle}>Gender Selection</Text>
                <View style={innerContainerStyle}>
                    <TouchableOpacity onPress={() => setGender("male")}>
                    <Text style={textStyle}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender("female")}>
                        <Text style={textStyle}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={textStyle}>{finalResult}</Text>
            <TouchableOpacity onPress={handle}>
                <Text style={textStyle}>Calculate</Text>
            </TouchableOpacity>
        </View>
    );
}
