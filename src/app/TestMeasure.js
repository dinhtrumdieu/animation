import React, {Component} from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';

export default class TestMeasure extends Component {


    measureWelcome = ()=>{
        this.productImage.measure((ox, oy, width, height, px, py) => {
            console.log("ox: " + ox);
            console.log("oy: " + oy);
            console.log("width: " + width);
            console.log("height: " + height);
            console.log("px: " + px);
            console.log("py: " + py);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} ref={(productImage) => {
                    this.productImage = productImage;
                }}>
                    Welcome to React Native!
                </Text>
                <TouchableOpacity onPress={this.measureWelcome}>
                    <Text>Measure it</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8faff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
