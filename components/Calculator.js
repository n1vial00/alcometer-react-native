import React from 'react';
import { View, Text, TextInput } from 'react-native';


export default function Calculator() {

    const [bottle, onChangeBottle] = React.useState(0);

    const [weight, onChangeWeight] = React.useState(0);

    const [hour, onChangeHours] = React.useState(0);

    return (
        <View>

            <Text>Nee nee</Text>

            <TextInput
                onChangeBottle={onChangeBottle}
                value={bottle}
                keyboardType="numeric"
            />

            <TextInput
                onChangeWeight={onChangeWeight}
                value={weight}
                keyboardType="numeric"
            />
            
            <TextInput
                onChangeHours={onChangeHours}
                value={hour}
                keyboardType="numeric"
            />

        </View>
    );
}
