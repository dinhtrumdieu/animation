import React, {Component} from 'react';
import {
    Text,
    View,StyleSheet
} from 'react-native';
import FadeIn from "./animate/FadeIn";
import DemoInterpolate from "./animate/DemoInterpolate";
export default class App extends Component {
    render() {
        return (
            <View style = {styles.Container}>
                <FadeIn style={{backgroundColor:'red',width:100,height:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>FadeIn</Text>
                </FadeIn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
