import React, { Component } from "react";
import { View, Image, Dimensions, Switch } from "react-native";
import * as Animatable from "react-native-animatable";
/**
 * 
const Lamp = ({ isOff, onValueChange}) => {
    return (
        <Animatable.View
        transition="backgroundColor"
        duration={1000}
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isOff ?  '#272822' : 'mediumaquamarine',
        }}
    >
        <Switch
            tintColor="white"
            onTintColor="mediumaquamarine"
            value={isOff}
            onValueChange={onValueChange}
        />
    </Animatable.View>
    );
}

const fadeIn = {
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1
    }
};
const zoomIn = {
    0: {
        backgroundColor: "green",
        opacity: 1,
        scale: 1,
    },
    0.5: {
        opacity: 1,
        scale: 0.3,
        backgroundColor: "dodgerblue",
    },
    1: {
        opacity: 1,
        scale: 1,
        backgroundColor: "red",
    }
}
 */

const MONEY_DIMENSIONS = { width: 50, height: 22 };
const SCREEN_DIMENSIONS = Dimensions.get("window");

const Falling = ({ duration, delay, style, children }) => (
  <Animatable.View
    animation={{
      from: { translateY: -MONEY_DIMENSIONS.height },
      to: { translateY: SCREEN_DIMENSIONS.height }
    }}
    duration={duration}
    delay={delay}
    easing={t => Math.pow(t, 1.7)}
    iterationCount="infinite"
    useNativeDriver
    style={style}
  >
    {children}
  </Animatable.View>
);
const Swinging = ({ amplitude, rotation = 7, ...props }) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: 0,
        rotate: `${rotation}deg`
      },
      0.5: {
        translateX: 0,
        translateY: amplitude / 2,
        rotate: `${rotation}deg`
      },
      1: {
        translateX: amplitude,
        translateY: 0,
        rotate: `${-rotation}deg`
      }
    }}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver
    {...props}
  />
);

const FLIP_KEYFRAMES = {
  from: { rotateX: "0deg" },
  to: { rotateX: "360deg" }
};
const FLIP_BACK_KEYFRAMES = {
  from: { rotateX: "180deg" },
  to: { rotateX: "-180deg" }
};

const FlippingImage = ({ back, delay, duration = 2000, source }) => (
  <Animatable.Image
    animation={back ? FLIP_BACK_KEYFRAMES : FLIP_KEYFRAMES}
    duration={duration}
    delay={delay}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      position: "absolute",
      backfaceVisibility: "hidden"
    }}
  />
);

const randomize = max => Math.random() * max;
const range = count => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const ErlichBachman = ({ children }) => (
  <Image
    source={require("./assets/erlich.png")}
    style={{ flex: 1, width: null, height: null }}
  >
    {children}
  </Image>
);

const MakeItRain = ({ count = 15, duration = 3000 }) => (
  <ErlichBachman>
    {range(count)
      .map(i => randomize(1000))
      .map((flipDelay, i) => (
        <Falling
          duration={duration}
          key={i}
          delay={i * (duration / count)}
          style={{
            position: "absolute",
            left: randomize(SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width)
          }}
        >
          <Swinging
            amplitude={MONEY_DIMENSIONS.width / 5}
            delay={randomize(duration)}
          >
            <FlippingImage source={require("./assets/money-front.png")} />
            <FlippingImage source={require("./assets/money-back.png")} back />
          </Swinging>
        </Falling>
      ))}
  </ErlichBachman>
);

export default class AnimationTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOff: true
    };
  }
  render() {
    return MakeItRain;
    /**
             * <View style={{flex: 1}}>
                <Animatable.Text duration={2000} animation={fadeIn}>Fade me in</Animatable.Text>
                <Animatable.Text duration={5000} animation={zoomIn}>Fade me in</Animatable.Text>
                <Lamp
                    isOff={this.state.isOff}
                    onValueChange={isOff => this.setState({ isOff })}
                />
            
            </View>
             */
  }
}
