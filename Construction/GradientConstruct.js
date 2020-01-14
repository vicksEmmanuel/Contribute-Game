import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";

export default class GradientConstruct extends Component {
  render() {
    const { style, color1, color2, startX, startY, endX, endY } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={{
          x: startX,
          y: startY
        }}
        end={{
          x: endX,
          y: endY
        }}
        style={style}
      />
    );
  }
}
