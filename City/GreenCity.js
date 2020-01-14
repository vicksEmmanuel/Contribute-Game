import React, { Component } from "react";
import { Image, View, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import WrappedBlurView from "../Construction/WrappedBlurView";

export const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class GreenCity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: 50,
          left: 0,
          overflow: "hidden"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 40,
              height: 90,
              left: Dimensions.get("screen").width - 80
            }}
            source={require("../assets/greencity/windmill.png")}
          />
          <Image
            style={{
              width: 40,
              height: 90,
              left: Dimensions.get("screen").width - 100
            }}
            source={require("../assets/greencity/windmill.png")}
          />
          <Image
            style={{
              width: 40,
              height: 90,
              left: Dimensions.get("screen").width - 120
            }}
            source={require("../assets/greencity/windmill.png")}
          />
          <View style={{ position: "absolute" }}>
            <View
              style={{
                left: Dimensions.get("screen").width - 85,
                top: 3,
                transform: [{ scale: 0.8 }]
              }}
            >
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 1 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute"
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                delay={200}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.8 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.8 }],
                  left: 10
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                delay={500}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.6 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.6 }],
                  left: 18
                }}
                source={require("../assets/greencity/wind.png")}
              />
            </View>
            <View
              style={{
                left: Dimensions.get("screen").width - 60,
                top: 3,
                transform: [{ scale: 0.8 }]
              }}
            >
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 1 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute"
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                delay={200}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.8 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.8 }],
                  left: 10
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                delay={500}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.6 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.6 }],
                  left: 18
                }}
                source={require("../assets/greencity/wind.png")}
              />
            </View>
            <View
              style={{
                left: Dimensions.get("screen").width - 40,
                top: 3,
                transform: [{ scale: 0.8 }]
              }}
            >
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                duration={3000}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 1 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute"
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                delay={200}
                duration={3000}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.8 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.8 }],
                  left: 10
                }}
                source={require("../assets/greencity/wind.png")}
              />
              <Animatable.Image
                iterationCount="infinite"
                useNativeDriver
                delay={500}
                duration={3000}
                animation={{
                  0: {
                    opacity: 0,
                    transform: [{ scale: 0 }]
                  },
                  0.1: {
                    opacity: 1
                  },
                  1: {
                    transform: [{ scale: 0.6 }],
                    opacity: 0
                  }
                }}
                style={{
                  width: 25,
                  height: 50,
                  position: "absolute",
                  transform: [{ scale: 0.6 }],
                  left: 18
                }}
                source={require("../assets/greencity/wind.png")}
              />
            </View>
          </View>
        </View>
        <Animatable.Image
          iterationCount="infinite"
          duration={3600}
          useNativeDriver
          animation={{
            from: {
              translateX: 0
            },
            to: {
              translateX: -100
            }
          }}
          source={require("../assets/greencity/greenland.png")}
          style={{
            left: -(Dimensions.get("screen").width / 2),
            top: -170,
            height: 500
          }}
        />
        <View style={{ top: -225 }}>
          <View style={{ top: -260, flexDirection: "row", left: -50 }}>
            <Image
              source={require("../assets/greencity/hospital.png")}
              style={{ width: 135, height: 60, left: 0 }}
            />
            <Image
              source={require("../assets/greencity/firestation.png")}
              style={{ width: 80, height: 60, left: 4, top: 3 }}
            />
            <Image
              source={require("../assets/greencity/shop.png")}
              style={{ width: 80, height: 60, left: 3 }}
            />
            <Image
              source={require("../assets/greencity/hospital.png")}
              style={{ width: 135, height: 60, left: 3 }}
            />
            <Image
              source={require("../assets/greencity/firestation.png")}
              style={{ width: 70, height: 60, left: 3, top: 3 }}
            />
            <Image
              source={require("../assets/greencity/shop.png")}
              style={{ width: 70, height: 60, left: 20 }}
            />
          </View>
          <View style={{ top: -290, flexDirection: "row" }}>
            <Image
              source={require("../assets/greencity/towncouncil.png")}
              style={{ width: 80, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/townestate.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/townhouse.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/church.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/policehouse.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <View style={{ top: -330, left: 5, flexDirection: "row" }}>
            <Image
              source={require("../assets/greencity/policehouse.png")}
              style={{ width: 80, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/towncouncil.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/church.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/townhouse.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/greencity/townestate.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <View style={{ left: 170, top: -70 }}>
            <View style={{ top: -270, flexDirection: "row" }}>
              {Array.apply(null, Array(3)).map((el, idx) => {
                return (
                  <View
                    key={Math.random() * 30000}
                    style={{ flexDirection: "row" }}
                  >
                    <Image
                      source={require("../assets/greencity/privatehouse.png")}
                      style={{ width: 80, height: 30 }}
                    />
                  </View>
                );
              })}
            </View>
            <View style={{ top: -280, flexDirection: "row", left: 5 }}>
              {Array.apply(null, Array(3)).map((el, idx) => {
                return (
                  <View
                    style={{ flexDirection: "row" }}
                    key={Math.random() * 30000}
                  >
                    <Image
                      source={require("../assets/greencity/privatehouse.png")}
                      style={{ width: 80, height: 30 }}
                    />
                  </View>
                );
              })}
            </View>
            <View style={{ top: -290, flexDirection: "row", left: 8 }}>
              {Array.apply(null, Array(3)).map((el, idx) => {
                return (
                  <View
                    style={{ flexDirection: "row" }}
                    key={Math.random() * 30000}
                  >
                    <Image
                      source={require("../assets/greencity/privatehouse.png")}
                      style={{ width: 80, height: 30 }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{ top: -30 }}>
            <Image
              source={require("../assets/greencity/bridgespaces.png")}
              style={{
                width: 160,
                height: 80,
                top: -375,
                left: -24,
                transform: [{ rotateY: "-200deg" }]
              }}
            />
            <Image
              source={require("../assets/greencity/bridgeisometric.png")}
              style={{
                width: 180,
                height: 150,
                top: -500,
                left: -10,
                transform: [{ rotateY: "-200deg" }]
              }}
            />
          </View>
          <View style={{ flexDirection: "row", left: 8, top: -230 }}>
            {Array.apply(null, Array(3)).map((el, idx) => {
              return (
                <Image
                  key={Math.random() * 30000}
                  source={require("../assets/greencity/bicycle.png")}
                  style={{
                    width: 20,
                    height: 20,
                    left: 102 - idx * 3,
                    top: -430,
                    transform: [{ rotate: "-5deg" }]
                  }}
                />
              );
            })}
          </View>
          <View style={{ flexDirection: "row", left: 8, top: -230 }}>
            {Array.apply(null, Array(3)).map((el, idx) => {
              return (
                <Image
                  key={Math.random() * 30000}
                  source={require("../assets/greencity/bicycle.png")}
                  style={{
                    width: 20,
                    height: 20,
                    left: 104 - idx * 3,
                    top: -435,
                    transform: [{ rotate: "-5deg" }]
                  }}
                />
              );
            })}
          </View>
          <View style={{ top: -220, left: 175 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    duration={1000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", top: -25 }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    useNativeDriver
                    direction="alternate"
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", top: -50 }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    easing="ease-in-out"
                    useNativeDriver
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 30) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree1.png")}
                    style={{ width: 20, top: -420, height: 20 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick1.png")}
                    style={{ width: 10, top: -420, height: 20 }}
                  />
                </View>
                <View>
                  <Animatable.Image
                    delay={Math.floor(Math.random() * 3000)}
                    duration={36000}
                    direction="alternate"
                    useNativeDriver
                    easing="ease-in-out"
                    animation={{
                      from: {
                        rotate: `${-1 *
                          (Math.floor(Math.random() * 10) + 1)}deg`
                      },
                      to: {
                        rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                      }
                    }}
                    source={require("../assets/greencity/tree2.png")}
                    style={{ width: 10, top: -420, height: 30 }}
                  />
                  <Image
                    source={require("../assets/greencity/stick2.png")}
                    style={{ width: 5, top: -420, height: 20 }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", top: -330 }}>
            <Image
              source={require("../assets/greencity/townestate.png")}
              style={{ width: 55, height: 104, top: -454 }}
            />
            <Image
              source={require("../assets/greencity/trainstation.png")}
              style={{ width: 270, height: 75, top: -420, left: -80 }}
            />
          </View>
          <View style={{ top: -370 }}>
            <Animatable.Image
              duration={37000}
              iterationCount="infinite"
              animation={{
                from: {
                  left: -700
                },
                to: {
                  left: 700
                }
              }}
              source={require("../assets/greencity/train.png")}
              style={{ width: 525, height: 40, top: -424, left: -300 }}
            />
            <View style={{ flexDirection: "row", top: -30 }}>
              <Image
                source={require("../assets/greencity/raillines.png")}
                style={{ width: 200, height: 10, top: -420, left: 0 }}
              />
              <Image
                source={require("../assets/greencity/raillines.png")}
                style={{ width: 200, height: 10, top: -420, left: 0 }}
              />
            </View>
            <View style={{ top: -300 }}>
              <View>
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{ transform: [{ scale: 2 }, { rotateY: "180deg" }] }}
              >
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{ transform: [{ scale: 0.8 }, { rotateX: "180deg" }] }}
              >
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
              <View>
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{ transform: [{ scale: 2 }, { rotateY: "180deg" }] }}
              >
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
              <View
                style={{ transform: [{ scale: 0.8 }, { rotateX: "180deg" }] }}
              >
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf1.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (10 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf2.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (20 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf3.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (30 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf4.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (50 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf5.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (70 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf6.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (80 / 100),
                    position: "absolute"
                  }}
                />
                <Animatable.Image
                  duration={randomBetween(15000, 40000)}
                  delay={randomBetween(-5000, -7000)}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  animation={{
                    0: {
                      top: -450,
                      opacity: 0,
                      translateX: 20,
                      rotate: "0deg"
                    },
                    0.1: {
                      opacity: 1
                    },
                    0.2: {
                      translateX: -20,
                      rotate: "45deg"
                    },
                    0.4: {
                      translateX: -20,
                      rotate: "90deg"
                    },
                    0.6: {
                      translateX: 20,
                      rotate: "135deg"
                    },
                    0.8: {
                      translateX: -20,
                      rotate: "180deg"
                    },
                    1: {
                      top: -10,
                      translateX: -20,
                      rotate: "225deg"
                    }
                  }}
                  source={require("../assets/greencity/leaf7.png")}
                  style={{
                    width: 10,
                    height: 10,
                    top: -420,
                    left: Dimensions.get("screen").width * (90 / 100),
                    position: "absolute"
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ top: -478.5 }}>
            <Image
              source={require("../assets/greencity/businesspremises.png")}
              style={{
                width: 50,
                height: 120,
                top: -420,
                left: Dimensions.get("screen").width - 50,
                transform: [{ rotateY: "180deg" }]
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ top: -550 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", top: -25 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", top: -50 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ top: -520 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", top: -25 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row", top: -50 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      easing="ease-in-out"
                      useNativeDriver
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 30) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 30) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree1.png")}
                      style={{ width: 20, top: -420, height: 20 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick1.png")}
                      style={{ width: 10, top: -420, height: 20 }}
                    />
                  </View>
                  <View>
                    <Animatable.Image
                      delay={Math.floor(Math.random() * 3000)}
                      duration={36000}
                      direction="alternate"
                      useNativeDriver
                      easing="ease-in-out"
                      animation={{
                        from: {
                          rotate: `${-1 *
                            (Math.floor(Math.random() * 10) + 1)}deg`
                        },
                        to: {
                          rotate: `${Math.floor(Math.random() * 10) + 1}deg`
                        }
                      }}
                      source={require("../assets/greencity/tree2.png")}
                      style={{ width: 10, top: -420, height: 30 }}
                    />
                    <Image
                      source={require("../assets/greencity/stick2.png")}
                      style={{ width: 5, top: -420, height: 20 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: -500, position: "absolute" }}>
          {Array.apply(null, Array(3)).map((el, idx) => {
            return (
              <Animatable.Image
                key={Math.random() * 30}
                duration={36000}
                delay={idx * 36000}
                iterationCount="infinite"
                animation={{
                  from: {
                    left: idx * Dimensions.get("screen").width
                  },
                  to: {
                    left: -1 * ((idx + 1) * Dimensions.get("screen").width)
                  }
                }}
                source={require("../assets/greencity/cloud.png")}
                resizeMode="center"
                style={{
                  top: 400,
                  width: Dimensions.get("screen").width,
                  height: Dimensions.get("screen").height
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default class BlurGreenCity extends Component {
  render() {
    return (
      <GreenCity />
    );
  }
}
