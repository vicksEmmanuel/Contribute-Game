import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import SpriteSheet from "rn-sprite-sheet";
import Lantern from "../assets/lanterns/Lantern";
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const floatingAnime = {
  0: {
    opacity: 0,
  },
  0.1: {
    opacity: 1
  },
  0.5: {
    translateY: -randomBetween(30, 50),
  },
  1: {
    translateY: -randomBetween(40, 100),
    opacity: 1,
  }
};
const LANTERN_DIMENSION = { width: 30, height: 30 };
const amplitude = LANTERN_DIMENSION.width / 5;
const rotation = 7;
const swingingAnime = {
  0: {
    translateX: -amplitude,
    translateY: 0,
    rotate: `${rotation}deg`,
  },
  0.5: {
    translateX: 0,
    translateY: amplitude / 2,
    rotate: `${rotation}deg`
  },
  1: {
    translateX: amplitude,
    translateY: 0,
    rotate: `${-rotation}deg`,
  }
};

export default class Pod extends Component {
  constructor(props) {
    super(props);
    this.pod = null;
    this.isPopping = false;
    this.actionTimeout = {};
    this.actionTimeoutCount = 2000;
    this.podTrack = {};
    this.podTimeoutCount = {};
    this.podTimeOutTrack = 0;
    this.state = {
      popping: props.popping
    };
  }
  endPop() {
    if (this.podTimeOutTrack === this.props.maxNumOfPops) {
      this.isPopping = false;
      this.podTimeOutTrack = 0;
      this.setState({
        popping: false
      });
    }
  }
  popped() {
    this.isPopping = true;
    this.props.podMaintain = {};
    this.setState(
      {
        popping: true
      },
      () => {
        Object.keys(this.podTrack).forEach(key => {
          this.actionTimeout[key] = setTimeout(() => {
            let temp = false;
            this.podTimeOutTrack = this.podTimeOutTrack + 1;
            Object.keys(this.props.podMaintain).forEach(keyyer => {
              if (this.props.podMaintain[keyyer] === true) {
                temp = true;
              }
            });
            if (!(temp === true)) {
              this.endPop();
            }
            this.props.lanternVisible[key] = false;
          }, this.podTimeoutCount[key]);
        });
      }
    );
  }
  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  lantern(id) {
    let color = randomBetween(1, 40);
    let twelve = randomBetween(1, 12);
    const checkColor = x => {
      if (x >= 20 && x <= 40) {
        return "orange";
      } else if (x >= 10 && x <= 19) {
        return "blue";
      } else if (x >= 5 && x <= 9) {
        return "green";
      } else if (x >= 1 && x <= 4) {
        return "red";
      }
    };
    this.podTrack[id] = checkColor(color);
    this.podTimeoutCount[id] = this.randomBetween(
      this.actionTimeoutCount - 500,
      this.actionTimeoutCount
    );
    this.props.podMaintain[id] = false;
    this.props.lanternVisible[id] = true;

    return (
      <Animatable.View
        duration={this.podTimeoutCount[id]}
        animation={floatingAnime}
        iterationCount={1}
        style={[LANTERN_DIMENSION, { position: "absolute", zIndex: 5 }]}
        useNativeDriver
      >
        <View style={{ width: "100%", height: "100%" }}>
          {this.props.lanternVisible[id] === true ? (
            <View style={{ width: "100%", height: "100%" }}>
              <Animatable.View
                style={{ width: "100%", height: "100%" }}
                animation={swingingAnime}
                duration={this.podTimeoutCount[id]}
                iterationCount={1}
                useNativeDriver
              >
                <Animatable.Image
                  source={Lantern[`${checkColor(color)}${twelve}`]}
                  style={{ width: "100%", height: "100%" }}
                />
              </Animatable.View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  alert('clicked');
                  clearTimeout(this.actionTimeout[id]);
                  this.podTimeOutTrack = this.podTimeOutTrack + 1;
                  this.props.lanternVisible[id] = false;
                  this.props.podMaintain[id] = true;
                  setTimeout(() => {
                    this.endPop();
                  }, 1000);
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'black',
                  zIndex: 10,
                }}
              />
            </View>
          ) : (
            <View />
          )}
          {this.props.podMaintain[id] === false ? (
            <View />
          ) : (
            <View style={{ backgroundColor: "red", width: 30, height: 30 }} />
          )}
        </View>
      </Animatable.View>
    );
  }
  pop() {
    if (this.state.popping) {
      this.podTrack = {};
      let maxNumOfProps = this.props.maxNumOfPops;
      const rand = randomBetween(1, maxNumOfProps);
      const lantern = Array.apply(null, Array(rand)).map((i, idx) => {
        return this.lantern(i);
      });
      return lantern;
    }
  }
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    return (
      <View>
        <View
          style={{ flex: 1, zIndex: 2, position: "absolute", left: x, top: y }}
        >
          {this.pop()}
          <SpriteSheet
            ref={ref => (this.mole = ref)}
            source={require("../assets/pod.png")}
            columns={5}
            rows={5}
            width={30}
            height={30}
            animations={{
              ideal: [0],
              pod1: [1, 2, 3, 4, 5],
              ideal1: [5],
              pod2: [6, 7, 8, 9, 10],
              ideal2: [10],
              pod3: [11, 12, 13, 14, 15],
              ideal4: [15],
              pod4: [16, 17, 18, 19, 20],
              ideal5: [20]
            }}
          />
        </View>
      </View>
    );
  }
}
