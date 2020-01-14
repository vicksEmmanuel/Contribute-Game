import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { GreenCity } from "./City";

export default class ShadowTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        left: this.state.left - 0.5,
      });
    }, 200);
  }
  render() {
    return(
      <GreenCity />
    );
  }
  /**
   * render() {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: 'orange',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      >
        <View style={{ position: "relative", top: 60, left: 100 }}>
          {Array.apply(null, Array(30)).map((el, idx) => {
            const color = `rgba(15,15,15,1)`;
            return (
              <View
                key={idx}
                style={{
                  width: 50,
                  height: 30,
                  position: "absolute",
                  top: idx,
                  left: idx,
                  transform: [
                    { rotateX: `${60 }deg` },
                  ],
                  opacity: 0.05,
                  backgroundColor: color,
                }}
              />
            );
          })}
          <View
            style={{
              width: 50,
              height: 30,
              position: "absolute",
              backgroundColor: 'green',
              borderBottomWidth: 0,
              borderColor: "rgba(15,15,15,0.95)",
              top: 0,
              borderRadius: 10,
              transform: [
                { rotateX: '60deg'},
                { rotateY: '0deg'},
                { rotateZ: '0deg'}
              ],
              left: 0,
            }}
          />
        </View>
      </View>
    );
  }
   */
}
