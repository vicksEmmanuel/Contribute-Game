import React, { Component } from "react";
import { StyleSheet, View, Animated, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default class Sun extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = this.props.position[0];
    const opacity = this.props.day === true ? 1 : 0;
    const top = this.props.top;
    return (
      <View
        style={[
          styles.finger,
          {
            left: x * (this.props.size / 170),
            top,
            borderRadius: 50,
            opacity: opacity
          }
        ]}
      >
        <Animatable.Image
          animation={
            this.props.day === false
              ? {
                  0: { opacity: 1 },
                  0.2: { opacity: 0.8 },
                  0.4: { opacity: 0.6 },
                  0.6: { opacity: 0.4 },
                  0.8: { opacity: 0.2 },
                  1: { opacity: 0 },
                }
              : {
                  from: { rotate: "0deg" },
                  to: { rotate: "360deg" }
                }
          }
          duration={3000}
          easing="linear"
          iterationCount={this.props.day === true ? "infinite" : 1}
          style={{
            width: this.props.size,
            height: this.props.size,
            borderWidth: null,
            opacity
          }}
          source={require("../assets/sunlight.png")}
          useNativeDriver
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finger: {
    backgroundColor: "#888888",
    position: "absolute"
  }
});
