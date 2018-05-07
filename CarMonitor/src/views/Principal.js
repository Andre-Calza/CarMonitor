import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text>
                    Cena principal
                </Text>

                <TouchableHighlight onPress={() => { Actions.cena1() }}>
                    <Text>
                        Abrir Cena 1
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
