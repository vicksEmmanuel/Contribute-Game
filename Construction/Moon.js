import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default class Moon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = this.props.position[0];
    const opacity = this.props.day === false ? 1 : 0;
    return (
      <View
        style={[
          styles.finger,
          {
            left: x * this.props.size,
            borderRadius: 50,
            top: 0,
            opacity,
          }
        ]}
      >
        <Animatable.Image
          animation={this.props.day === true ? 
            {
              from: { opacity : 1 },
              to: { opacity: 0}
            } : {
              from: { rotate: "0deg", },
              to: { rotate: "360deg" }
            }}
          duration={1000}
          easing="linear"
          iterationCount={ this.props.day === false ? "infinite" : 1}
          style={{ width: this.props.size, height: this.props.size, opacity }}
          source={require("../assets/moonlight.png")}
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
