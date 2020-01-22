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
    translateY: -randomBetween(0, 30)
  },
  0.1: {
    opacity: 1
  },
  0.5: {
    translateY: -randomBetween(30, 40)
  },
  1: {
    translateY: -randomBetween(40, 100),
    opacity: 1
  }
};
const LANTERN_DIMENSION = { width: 30, height: 30 };
const amplitude = LANTERN_DIMENSION.width / 5;
const rotation = 7;
const swingingAnime = {
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
};

export default class Pod extends Component {
  constructor(props) {
    super(props);
    this.pod = null;
    this.isPopping = false;
    this.actionTimeout = {};
    this.actionTimeoutCount = 12500;
    this.podTrack = {};
    this.podTimeoutCount = {};
    this.podTimeOutTrack = 0;
    this.singularLantern = [];
    this.lanternArray = {
      orange: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
      blue: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      red: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    };
    this.state = {
      popping: props.popping,
      lanternVisible: {},
      podMaintain: {}
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
    const fillObjectValues = value => {
      const x = {};
      const fillX = i => {
        x[i] = value;
      };
      Array.apply(null, Array(this.props.maxNumOfPops)).map((i, idx) => {
        fillX(idx);
      });
      return x;
    };
    const podMaintenance = fillObjectValues(false);
    const lanternVisibility = fillObjectValues(true);
    this.podTimeOutTrack = 0;

    this.setState(
      {
        popping: true,
        podMaintain: podMaintenance,
        lanternVisible: lanternVisibility
      },
      () => {
        Object.keys(this.podTrack).forEach(key => {
          this.actionTimeout[key] = setTimeout(() => {
            let tempLantern = this.state.lanternVisible;
            tempLantern[key] = false;
            this.setState({ lanternVisible: tempLantern });
            this.podTimeOutTrack = this.podTimeOutTrack + 1;
            this.endPop();
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
    let twelve = randomBetween(0, 11);
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
      this.actionTimeoutCount - 10000,
      this.actionTimeoutCount
    );
    return (
      <Animatable.View
        key={`${Math.random()} ${Date.now()}`}
        duration={this.podTimeoutCount[id]}
        iterationCount={1}
        style={[LANTERN_DIMENSION, { position: "absolute", zIndex: 5 }]}
        useNativeDriver
      >
        <View style={{ width: "100%", height: "100%" }}>
          {this.state.lanternVisible[id] === true ? (
            <View style={{ width: "100%", height: "100%", zIndex: 10 }}>
              <Animatable.View
                style={{ width: "100%", height: "100%" }}
                animation={swingingAnime}
                duration={this.podTimeoutCount[id]}
                iterationCount="infinite"
                useNativeDriver
              >
                <SpriteSheet
                  ref={ref => (this.singularLantern[id] = ref)}
                  source={Lantern[`lanternsprite`]}
                  columns={12}
                  rows={6}
                  width={30}
                  height={30}
                  animations={{
                    ideal: [this.lanternArray[`${checkColor(color)}`][twelve]],
                    explode: [
                      48,
                      49,
                      50,
                      51,
                      52,
                      53,
                      54,
                      53,
                      52,
                      51,
                      50,
                      49,
                      48,
                      55
                    ]
                  }}
                />
              </Animatable.View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  clearTimeout(this.actionTimeout[id]);
                  this.singularLantern[id].play({
                    type: "explode",
                    fps: 24,
                    onFinish: () => {
                      this.podTimeOutTrack = this.podTimeOutTrack + 1;
                      alert(this.podTimeOutTrack);
                      let tempPodMaintain = this.state.podMaintain;
                      tempPodMaintain[id] = true;
                      let tempLanternVisible = this.state.lanternVisible;
                      tempLanternVisible[id] = false;
                      this.setState(
                        {
                          lanternVisible: tempLanternVisible,
                          podMaintain: tempPodMaintain
                        },
                        () => {
                          this.endPop();
                        }
                      );
                    }
                  });
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10
                }}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </Animatable.View>
    );
  }
  pop() {
    if (this.state.popping) {
      this.podTrack = {};
      const xLantern = [];
      Array.apply(
        null,
        Array(this.randomBetween(1, this.props.maxNumOfPops))
      ).map((i, idx) => {
        xLantern.push(this.lantern(idx));
      });
      let lantern = xLantern.map(i => {
        return i;
      });
      return <View>{lantern}</View>;
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
