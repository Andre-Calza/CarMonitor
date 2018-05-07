import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxLogin}>
                    <Text style={styles.txtTituloBoxLogin}>LOGIN</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#06277a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxLogin: {
        flex: 0.8,
        height: 250,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'center',
    },
    txtTituloBoxLogin: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
