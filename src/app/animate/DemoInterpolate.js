import React, {Component} from 'react';
import {
    View, Animated, Text
} from 'react-native';
export default class DemoInterpolate extends Component {

    constructor(props){
        super(props);

        this.state = {
            colorAnim:new Animated.Value(0),
        }
    }

    componentDidMount(){
        const anim1 = Animated.timing(
            this.state.colorAnim,{
                toValue:1,
                duration:1000,
            }
        ).start();
    }

    render() {

        const backgroundColor = this.state.colorAnim.interpolate({
            inputRange:[0,1],
            outputRange:['green','red']
        });

        return (
            <View style={{justifyContent:'center',
                alignItems:'center',flex:1}}>
                <Animated.View style={{
                    width:100,
                    height:100,
                    backgroundColor,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                   <Text style={{color:'#fff'}}>Interpolate</Text>
                </Animated.View>
            </View>
        );
    }
}
