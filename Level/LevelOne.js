import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground
} from "react-native";
import AnimatedGradient from "../Construction/AnimatedGradient";
import LevelTrack from "../Headers/LevelTrack";
import Sun from "../Construction/Sun";
import Moon from "../Construction/Moon";
import { GameEngine, dispatch } from "react-native-game-engine";
import { DayAndNight } from "../GameLoops/LevelOne/DayAndNight";
import { Level } from "../GameLoops/LevelOne/Level";
import City from "../City/index";
import Pod from "../Construction/Pod";

const colors = [
  ["#5b2c83", "#d1628b"],
  ["#ca5a92", "#f4896b"],
  ["#f06b7e", "#f9a856"],
  ["#f18448", "#ffd364"],
  ["#fd9e58", "#ffe467"],
  ["#fda65a", "#ffe467"],
  ["#ffac6f", "#ffe467"],
  ["#fdc352", "#e8ed92"],
  ["#fee154", "#a3dec6"],
  ["#efeebc", "#61d0cf"],
  ["#74d4cc", "#1386a6"],
  ["#12a1c0", "#07506e"],
  ["#07729f", "#042c47"],
  ["#016792", "#00182b"],
  ["#004372", "#011d34"],
  ["#004372", "#00182b"],
  ["#003972", "#001322"],
  ["#003972", "#001322"],
  ["#012459", "#001322"],
  ["#040b3c", "#012459"],
  ["#040b3c", "#233072"],
  ["#192861", "#372074"],
  ["#28166b", "#45217c"],
  ["#371a79", "#713684"]
];
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const orientations = [
  {
    start: { x: 1, y: 0 },
    end: { x: 0, y: 1 }
  },
  {
    start: { x: 1, y: 0 },
    end: { x: 0, y: 1 }
  },
  {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  }
];
const dayFix = Math.random();
const checkDay = dayFix < 0.5 ? true : false;
let maxNumOfPops = 1;
let podMaintain = {};
let lanternVisible = {};
for (let i = 1; i <= maxNumOfPops; i++) {
  podMaintain[i] = false;
  lanternVisible[i] = true;
}

export default class LevelOne extends Component {
  constructor(props) {
    super(props);
    this.engine = null;
    this.state = {
      color: colors[checkDay === true ? 0 : 10],
      orientation: orientations[0],
      running: true,
      level: 1,
      reday: checkDay === true ? 0 : 10
    };
    this.pods = [];
    this.interval = null;
  }
  onEvent = e => {
    if (e.type === "game-over") {
      this.setState({
        running: false
      });
      Alert.alert("Game Over");
    }
    if (e.type === "reday") {
      this.setState(
        {
          reday: this.state.reday + 1 < colors.length ? this.state.reday + 1 : 0
        },
        () => {
          this.setState({
            color: colors[this.state.reday]
          });
        }
      );
    }
  };
  showBackground = () => {
    /**
     * return <View
          style={{
            position: "absolute",
            top: 70,
            width: WIDTH,
            height: HEIGHT
          }}
        >
          {City.GreenCity}
        </View>
     */

    return <View />;
  };
  draw = () => {
    const Act = {};
    Act["sun"] = {
      day: checkDay,
      position: [400, 0],
      xspeed: -1,
      nextMove: 0,
      updateFrequency: 0,
      size: 100,
      top: -70,
      podCheck: 1,
      checker: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      renderer: <Sun />
    };
    Act["moon"] = {
      day: checkDay,
      position: [0, 0],
      xspeed: 1,
      nextMove: 39,
      updateFrequency: 39,
      size: 50,
      checker: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      renderer: <Moon />
    };
    return Act;
  };
  drawPod = () => {
    let pod = [];
    const pods = (x, y, idx) => {
      return (
        <Pod
          position={[x, y]}
          key={idx}
          index={idx}
          ref={ref => {
            this.pods[idx] = ref;
          }}
          popping={false}
          podMaintain={{}}
          lanternVisible={{}}
          maxNumOfPops={maxNumOfPops}
        />
      );
    };
    const podCalc = () => {
      let left1 = 12;
      let left2 = 12;
      let left3 = 12;
      let left4 = 12;
      let left5 = 12;
      let left6 = 12;
      let podCount = 0;
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left1, 150, podCount++));
        left1 += 30;
      });
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left2, 180, podCount++));
        left2 += 30;
      });
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left3, 210, podCount++));
        left3 += 30;
      });
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left4, 240, podCount++));
        left4 += 30;
      });
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left5, 270, podCount++));
        left5 += 30;
      });
      Array.apply(null, Array(10)).map((i, idx) => {
        pod.push(pods(left6, 300, podCount++));
        left6 += 30;
      });
    };
    podCalc();
    let makePod = pod.map(i => {
      return i;
    });
    return (
      <View
        style={{
          top: 60,
          position: "absolute",
          width: WIDTH - 10,
          height: 190,
          borderRadius: 5
        }}
      >
        {makePod}
      </View>
    );
  };
  componentDidMount() {
    this.setupTicks();
  }
  setupTicks = () => {
    let speed = 550 - this.state.level * 50;
    if (speed < 350) {
      speed = 350;
    }
    this.interval = setInterval(this.popRandomPods, speed);
    //this.timeInterval = setInterval(this.timerTick, 1000);
  };
  popRandomPods = () => {
    if (this.pods.length > 1) {
      let randomIndex = this.randomBetween(0, this.pods.length - 1);
      if (!this.pods[randomIndex].isPopping) {
        this.pods[randomIndex].popped();
      }
    }
  };
  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    const { color, orientation } = this.state;
    return (
      <View style={{ width: WIDTH, height: WIDTH }}>
        <View style={{ width: WIDTH, height: HEIGHT }}>
          <AnimatedGradient
            style={{ flex: 1, width: "100%", height: "100%" }}
            colors={color}
            orientation={orientation}
          />
        </View>
        {this.showBackground()}
        <Image
          style={{
            position: "absolute",
            width: WIDTH - 10,
            alignSelf: "center",
            height: 190,
            borderRadius: 5,
            opacity: 0.5,
            top: 200
          }}
          source={require("../assets/podbackground.png")}
        />
        <View
          style={{
            position: "absolute",
            width: WIDTH - 10,
            alignSelf: "center",
            height: 190,
            borderRadius: 5,
            top: 200,
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        />
        <View
          style={{ position: "absolute", top: 0, width: WIDTH, height: HEIGHT }}
        >
          <GameEngine
            ref={ref => {
              this.engine = ref;
            }}
            style={{
              width: WIDTH,
              height: HEIGHT - 120,
              flex: null,
              top: 60
            }}
            entities={this.draw()}
            running={this.state.running}
            onEvent={this.onEvent}
            systems={[Level]} //DayAndNight
          >
            <StatusBar hidden={true} />
          </GameEngine>
          {this.drawPod()}
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <LevelTrack />
          </View>
        </View>
      </View>
    );
  }
}
