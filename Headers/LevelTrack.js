import React, { Component } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Svg, { G, Path, Circle, Polygon, Text as Foo } from "react-native-svg";
import SpriteSheet from "rn-sprite-sheet";

export const stars = {
  empty1: require("../assets/emptystar1.png"),
  empty2: require("../assets/emptystar2.png"),
  empty3: require("../assets/emptystar3.png"),
  half1: require("../assets/halfstar1.png"),
  half2: require("../assets/halfstar2.png"),
  half3: require("../assets/halfstar3.png"),
  full1: require("../assets/fullstar1.png"),
  full2: require("../assets/fullstar2.png"),
  full3: require("../assets/fullstar3.png")
};

export const timerIndicator = {
  timer: require("../assets/timer-sprite-sheet.png")
};

const Target = ({ target }) => (
  <View
    style={{
      backgroundColor: "pink",
      position: "relative",
      top: 5,
      borderRadius: 15,
      justifyContent: "center",
      padding: 15,
      alignItems: "center",
      width: "95%",
      height: 20
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center"
      }}
    >
      Target: {target}
    </Text>
  </View>
);

const LevelIndicator = ({ level, dimension, style }) => (
  <View
    style={{
      width: dimension,
      height: dimension,
      position: "relative",
      left: -22,
      top: -20
    }}
  >
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={dimension}
      height={dimension}
      viewBox="0 0 700 500"
    >
      <G>
        <Path
          fill="#EFEFEF"
          d="M220.759,479.863l221.492-143.43c3.385-2.209,6.131-7.238,6.131-11.281v-206.49l-233.753-0.077v357.935
		C214.624,480.562,217.369,482.045,220.759,479.863z"
        />
        <Path
          fill="#EFEFEF"
          d="M220.759,479.863l101.352-65.942l101.186-66.19l12.641-8.279c2.067-1.39,4.301-2.771,6.236-4.151
		c1.889-1.45,3.211-3.395,4.179-5.585c1.035-2.226,1.087-4.408,1.015-7.018l-0.043-7.563l-0.081-15.107l-0.328-60.452
		l-0.362-120.912l1.824,1.825c-38.957,0.12-77.913,0.12-116.874-0.025l-116.879-0.375l1.5-1.501l-0.985,183.555l-0.319,91.785
		l-0.098,45.89l-0.042,22.943l-0.026,11.477c0.039,1.875-0.234,3.948,0.93,5.534C216.836,481.39,219.266,480.92,220.759,479.863z
		 M220.759,479.863c-1.488,1.065-3.918,1.543-5.197-0.086c-1.177-1.594-0.917-3.675-0.959-5.551l-0.025-11.468l-0.047-22.943
		l-0.094-45.89l-0.319-91.785l-0.984-183.555c-0.004-0.827,0.656-1.492,1.479-1.5h0.013l116.879-0.307
		c38.961-0.119,77.917-0.094,116.874,0.051c1.006-0.009,1.825,0.818,1.829,1.825l-0.366,120.912l-0.32,60.46l-0.081,15.107
		l-0.038,7.563c0.067,2.396-0.06,5.406-1.258,7.784c-1.049,2.388-2.703,4.725-4.835,6.318c-2.178,1.519-4.259,2.755-6.394,4.152
		l-12.73,8.151l-101.795,65.252L220.759,479.863z"
        />
      </G>
      <G>
        <Path
          fill="#E2574C"
          d="M220.759,447.13l221.492-143.438c3.385-2.191,6.131-7.23,6.131-11.264V85.93l-233.758-0.068v357.926
		C214.624,447.821,217.369,449.321,220.759,447.13z"
        />
        <Path
          fill="#E2574C"
          d="M220.759,447.13l101.352-65.934l101.186-66.189l12.641-8.296c2.067-1.382,4.301-2.763,6.236-4.136
		c1.889-1.458,3.211-3.41,4.179-5.603c1.035-2.225,1.087-4.39,1.015-7.016l-0.043-7.547l-0.081-15.117l-0.328-60.451L446.553,85.93
		l1.824,1.825c-38.957,0.119-77.913,0.119-116.874-0.025l-116.879-0.375l1.5-1.492l-0.985,183.554l-0.319,91.778l-0.098,45.888
		l-0.042,22.944l-0.026,11.478c0.039,1.858-0.234,3.938,0.93,5.524C216.836,448.656,219.266,448.195,220.759,447.13z
		 M220.759,447.13c-1.488,1.065-3.918,1.553-5.197-0.076c-1.177-1.604-0.917-3.691-0.959-5.55l-0.025-11.486l-0.047-22.936
		l-0.094-45.888l-0.319-91.778l-0.989-183.554c-0.004-0.828,0.656-1.493,1.479-1.501h0.017l116.875-0.307
		c38.96-0.128,77.917-0.094,116.878,0.051c1.002-0.008,1.82,0.819,1.825,1.825l-0.367,120.912l-0.324,60.451l-0.076,15.117
		l-0.043,7.547c0.076,2.403-0.056,5.405-1.249,7.792c-1.053,2.388-2.711,4.724-4.835,6.318c-2.183,1.518-4.268,2.754-6.398,4.152
		l-12.729,8.134l-101.796,65.252L220.759,447.13z"
        />
      </G>
      <Foo
        transform="matrix(1 0 0 1 265.7676 256.9678)"
        fill="#EFEFEF"
        fontFamily="'ComicSansMS'"
        fontSize={level >= 100 ? "80" : "106.8323"}
      >
        {level >= 10 ? "" : "L"}
        {level}
      </Foo>
      <Path
        fill="#EC9089"
        d="M389.942,120.138h39.907c1.713,0,2.848,1.143,2.848,2.848v17.104c0,1.714-1.139,2.848-2.848,2.848h-39.907
	c-1.71,0-2.848-1.134-2.848-2.848v-17.104C387.095,121.562,388.232,120.138,389.942,120.138z"
      />
    </Svg>
  </View>
);
const Star = ({
  score,
  target,
  levelStar,
  imageStyle1,
  imageStyle2,
  imageStyle3
}) => {
  let reImage = null;
  if (score <= (levelStar[0] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.empty3} style={imageStyle3} />
        <Image source={stars.empty2} style={imageStyle2} />
        <Image source={stars.empty1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[1] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.empty3} style={imageStyle3} />
        <Image source={stars.empty2} style={imageStyle2} />
        <Image source={stars.half1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[2] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.empty3} style={imageStyle3} />
        <Image source={stars.empty2} style={imageStyle2} />
        <Image source={stars.full1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[3] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.empty3} style={imageStyle3} />
        <Image source={stars.half2} style={imageStyle2} />
        <Image source={stars.full1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[4] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.empty3} style={imageStyle3} />
        <Image source={stars.full2} style={imageStyle2} />
        <Image source={stars.full1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[5] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.half3} style={imageStyle3} />
        <Image source={stars.full2} style={imageStyle2} />
        <Image source={stars.full1} style={imageStyle1} />
      </View>
    );
  } else if (score <= (levelStar[6] / 100) * target) {
    reImage = (
      <View style={{ flexDirection: "row" }}>
        <Image source={stars.full3} style={imageStyle3} />
        <Image source={stars.full2} style={imageStyle} />
        <Image source={stars.full1} style={imageStyle} />
      </View>
    );
  }
  return <View>{reImage}</View>;
};
class Timer extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  animation = () => {
    let anime = {};
    if (this.props.currentTime === 0) {
      anime = {
        from: {
          opacity: 0
        },
        to: {
          opacity: 0
        }
      };
    } else if (this.props.currentTime <= 10) {
      anime = {
        from: {
          opacity: 0.1
        },
        to: {
          opacity: 0.6
        }
      };
    } else {
      anime = {
        from: {
          opacity: 0
        },
        to: {
          opacity: 0
        }
      };
    }
    return anime;
  };
  timerAnimation = status => {
    this.timer.play({
      type: status,
      onFinish: () => {}
    });
  };
  render() {
    if (this.timer) {
      this.timerAnimation(
        (() => {
          if (this.props.currentTime <= 0) {
            return "empty";
          } else if (this.props.currentTime <= 10) {
            return "exhausting";
          } else if (this.props.currentTime <= 30) {
            return "half";
          } else {
            return "full";
          }
        })()
      );
    }
    return (
      <View style={this.props.style}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <SpriteSheet
            ref={ref => (this.timer = ref)}
            source={this.props.source}
            columns={7}
            rows={1}
            width={30}
            animations={{
              empty: [1],
              full: [0],
              reducing: [2],
              reboostfull: [3],
              reboosthalf: [4],
              half: [5],
              exhausting: [6]
            }}
          />
          <Animatable.Text
            style={{
              position: "absolute",
              top: 6,
              left: this.props.currentTime >= 10 ? 14 : 17,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#e6e6ea",
              fontWeight: "bold",
              fontSize: 12
            }}
            duration={200}
            animation={{ from: { opacity: 0 }, to: { opacity: 1 } }}
          >
            {this.props.currentTime}
          </Animatable.Text>
        </View>
        <Animatable.View
          animation={this.animation()}
          duration={500}
          easing={t => Math.pow(t, 1.7)}
          iterationCount="infinite"
          useNativeDriver
          style={{
            width: "60%",
            height: "60%",
            position: "absolute",
            top: -2,
            left: 6,
            backgroundColor:
              this.props.currentTime <= 10 ? "#f4f4f8" : "inherit",
            flex: 1,
            borderRadius: 50
          }}
        />
      </View>
    );
  }
}
const Score = ({ currentScore, totalScore, style }) => (
  <View style={style}>
    <Animatable.View
      transition="width"
      duration={1000}
      style={{
        width: `${(currentScore * 100) / totalScore}%`,
        height: "100%",
        borderRadius: 20,
        backgroundColor: "black"
      }}
    />
    <Text
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        top: -13,
        fontWeight: "bold",
        fontSize: 10,
        position: "relative",
        color: "green"
      }}
    >
      {currentScore}
    </Text>
  </View>
);
const Coin = ({ currentCoin, style, stylex, dimension }) => (
  <View style={style}>
    <View style={{ position: "relative", top: -33, left: -40 }}>
      <Svg
        style={{ position: "relative" }}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={dimension.x}
        height={dimension.y}
        viewBox="0 0 700 500"
      >
        <Circle
          fill="#FFE73F"
          stroke="#231F20"
          strokeWidth="2"
          strokeMiterlimit="10"
          cx="343.334"
          cy="225.683"
          r="50"
        />
        <Circle
          fill="#FFBF2A"
          stroke="#231F20"
          strokeWidth="2"
          strokeMiterlimit="10"
          cx="343.334"
          cy="225.683"
          r="43.651"
        />
        <Path
          fill="#FFBF2A"
          stroke="#231F20"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          d="M343.333,262.189
                c-1.781,0-3.532-0.128-5.245-0.374c-17.677-2.543-31.263-17.751-31.263-36.133c0-20.163,16.345-36.507,36.507-36.507
                c17.641,0,32.361,12.514,35.765,29.149"
        />
        <Path
          fill="#FFCC2A"
          stroke="#231F20"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M378.631,235.038
                c-1.033,3.907-2.697,7.559-4.877,10.837c-1.301,1.957-2.786,3.78-4.431,5.447"
        />
        <Polygon
          opacity="0.4"
          fill="#D48200"
          stroke="#D48200"
          strokeWidth="0.8864"
          strokeMiterlimit="10"
          points="343.333,211.938 
                360.7,202.807 357.384,222.146 371.435,235.841 352.018,238.663 343.333,256.258 334.65,238.663 315.233,235.841 329.283,222.146 
                325.966,202.807 "
        />
      </Svg>
    </View>
    <View style={stylex}>
      <Animatable.View
        duration={1000}
        transition="width"
        style={{
          width: currentCoin * 10 >= 100 ? "100%" : `${currentCoin * 10}%`,
          height: 10,
          borderRadius: 20,
          backgroundColor: "white"
        }}
      />
    </View>
  </View>
);
const PausePlay = ({ status }) => {
  if (status === "pause") {
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          source={require("../assets/icon_pause.png")}
          style={{ width: 10, height: 10 }}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          source={require("../assets/icon_play.png")}
          style={{ width: 10, height: 10 }}
        />
      </TouchableOpacity>
    );
  }
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: Dimensions.get("screen").width,
          height: 60,
          backgroundColor: "#00acd4"
        }}
      >
        <View style={{ flex: 42, zIndex: 5, height: "100%" }}>
          <View style={{ flexDirection: "row" }}>
            <LevelIndicator level={this.props.level} dimension={70} />
            <View
              style={{
                position: "relative",
                left: -50,
                top: -2
              }}
            >
              <Star
                score={this.props.currentScore}
                target={this.props.target}
                imageStyle1={{
                  width: 21,
                  height: 21,
                  margin: 0,
                  padding: 0,
                  left: -20
                }}
                imageStyle2={{
                  width: 25,
                  height: 25,
                  margin: 0,
                  padding: 0,
                  left: -11
                }}
                imageStyle3={{
                  width: 30,
                  height: 30,
                  margin: 0,
                  padding: 0,
                  left: 0
                }}
                levelStar={this.props.levelStar}
              />
            </View>
          </View>
          <View
            style={{
              position: "relative",
              top: -47,
              left: 10,
              flexDirection: "row",
              padding: 5
            }}
          >
            <View style={{ marginRight: 5 }}>
              <PausePlay status={this.props.gameStatus} />
            </View>
            <View style={{ position: "relative", top: 0 }}>
              <Score
                currentScore={this.props.currentScore}
                totalScore={this.props.target}
                style={{
                  width: 90,
                  height: 12,
                  borderRadius: 20,
                  backgroundColor: "white",
                  borderColor: "rgba(0,0,0,0.2)",
                  borderWidth: 0.5
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: "relative",
              top: -47,
              left: 10,
              flexDirection: "row",
              padding: 5
            }}
          >
            <Coin
              currentCoin={this.props.currentCoin} //-currentCoin default o zero is 10
              style={{ width: 150, height: 150, flexDirection: "row" }}
              dimension={{ x: 90, y: 70 }}
              stylex={{
                backgroundColor: "orange",
                width: 90,
                height: 10,
                borderRadius: 20,
                position: "relative",
                left: -75,
                top: -5,
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            />
          </View>
        </View>
        <View style={{ flex: 14, zIndex: 1, height: "100%" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Timer
              source={timerIndicator.timer}
              ref={ref => (this.timer = ref)}
              currentTime={this.props.currentTime}
              style={{ width: 50, height: 50, top: 5 }}
            />
          </View>
        </View>
        <View style={{ flex: 44, height: "100%" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Target target={this.props.target} />
          </View>
        </View>
      </View>
    );
  }
}

export default class LevelTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 15,
      interval: 1000,
      level: 1,
      currentScore: 19000,
      levelTarget: 20000,
      levelStar: [0, 10, 40, 60, 80, 95, 100],
      gamestatus: "pause",
      currentCoin: 9
    };
  }
  render() {
    setTimeout(() => {
      this.setState({
        currentTime:
          this.state.currentTime - 1 <= 0 ? 0 : this.state.currentTime - 1
      });
    }, this.state.interval);
    return (
      <View style={{ width: Dimensions.get("screen").width }}>
        <Header
          currentTime={this.state.currentTime}
          interval={this.state.interval}
          level={this.state.level}
          target={this.state.levelTarget}
          currentScore={this.state.currentScore}
          levelStar={this.state.levelStar}
          gameStatus={this.state.gamestatus}
          currentCoin={this.state.currentCoin}
        />
      </View>
    );
  }
}
