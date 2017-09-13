import React, {Component} from 'react';
import {
    Text,
    View, Animated,Easing
} from 'react-native';

export default class FadeIn extends Component {

    state = {
       // fadeIn: new Animated.Value(0),
        translate: new Animated.Value(-300),
       // fadeIn1: new Animated.Value(0),
        translate1: new Animated.Value(-300),
    }

    componentDidMount() {
      const anim1 =   Animated.timing(this.state.translate,
            {
                toValue: 0,
                duration: 3000,
                easing:Easing.bounce,
            }
        );

        const anim2 = Animated.timing(this.state.translate1,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start();

        //Animated.parallel([anim1,anim2]).start();

    }

    render() {
        const {style} = this.props;
        const marginLeft1 = this.state.translate1;
        return (
            <View>
               {/* <Animated.View style={{
                    ...style,
                  //  opacity: this.state.fadeIn,
                    marginLeft: this.state.translate
                }}>
                    {this.props.children}
                </Animated.View>*/}

                <Animated.View style={{
                    width:100,
                    height:100,
                    backgroundColor:'green',
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft:marginLeft1,
                }}>
                    {this.props.children}
                </Animated.View>
            </View>

        );
    }
}

