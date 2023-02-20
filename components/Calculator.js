import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from "../styles/Styles.js";
import NumericInput from 'react-native-numeric-input'


export default function Calculator({ isDarkMode , textStyle , innerContainerStyle}) {

    const [bottle, setBottle] = React.useState(0);
    const [weight, setWeight] = React.useState(69);
    const [hour, setHour] = React.useState(0);
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
            <View>
                <Text style={textStyle}>Weight: </Text>
                <NumericInput
                    value={weight}
                    onChange={setWeight}
                    minValue={0}
                    maxValue={200}
                    step={1}
                    textColor='green'
                />
            </View>

            <View>
                <Text style={textStyle}>Bottles: </Text>
                <NumericInput
                    value={bottle}
                    onChange={setBottle}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    textColor='green'
                />
            </View>

            <View>
                <Text style={textStyle}>Hours: </Text>
                <NumericInput
                    value={hour}
                    onChange={setHour}
                    minValue={0}
                    maxValue={100}
                    step={1}
                    textColor='green'
                />
            </View>

            <View>
                <Text style={textStyle}>Gender Selection</Text>
                <View style={innerContainerStyle}>
                    <TouchableOpacity style={[Styles.text, gender == "male" && Styles.selection]} onPress={() => setGender("male")}>
                    <Text style={textStyle}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.text, gender == "female" && Styles.selection]} onPress={() => setGender("female")}>
                        <Text style={textStyle}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={textStyle}>{finalResult}</Text>
                <TouchableOpacity style={Styles.button} onPress={handle}>
                    <Text style={textStyle}>Calculate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
