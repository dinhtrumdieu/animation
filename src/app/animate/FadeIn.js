import React, {Component} from 'react';
import {
    Text,
    View, Animated
} from 'react-native';

export default class FadeIn extends Component {

    state = {
        fadeIn: new Animated.Value(0),
        translate: new Animated.Value(-300),
    }

    componentDidMount() {
      const anim1 =   Animated.timing(this.state.fadeIn,
            {
                toValue: 1,
                duration: 2000,
            }
        );

        const anim2 = Animated.timing(this.state.translate,
            {
                toValue: 0,
                duration: 2000,
            }
        );

        Animated.parallel(anim1,anim2,200);

    }

    render() {
        const {style} = this.props;
        return (
            <Animated.View style={{
                ...style,
                opacity: this.state.fadeIn,
                marginLeft: this.state.translate
            }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

