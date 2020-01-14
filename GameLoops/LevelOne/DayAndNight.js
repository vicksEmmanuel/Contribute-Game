import React, { Component } from "react";
import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const moonLight = (moon, dispatch) => {
  if (moon.nextMove <= 0) {
    if (moon.checker[0] === 1) {
      dispatch({ type: "reday" });
      moon.checker[0] = 0;
    }
  } else if (moon.nextMove <= 3) {
    if (moon.checker[0] === 1) {
      dispatch({ type: "reday" });
      moon.checker[0] = 0;
    }
  } else if (moon.nextMove <= 6) {
    if (moon.checker[1] === 1) {
      dispatch({ type: "reday" });
      moon.checker[1] = 0;
    }
  } else if (moon.nextMove <= 9) {
    if (moon.checker[2] === 1) {
      dispatch({ type: "reday" });
      moon.checker[2] = 0;
    }
  } else if (moon.nextMove <= 12) {
    if (moon.checker[3] === 1) {
      dispatch({ type: "reday" });
      moon.checker[3] = 0;
    }
  } else if (moon.nextMove <= 15) {
    if (moon.checker[4] === 1) {
      dispatch({ type: "reday" });
      moon.checker[4] = 0;
    }
  } else if (moon.nextMove <= 18) {
    if (moon.checker[5] === 1) {
      dispatch({ type: "reday" });
      moon.checker[5] = 0;
    }
  } else if (moon.nextMove <= 21) {
    if (moon.checker[6] === 1) {
      dispatch({ type: "reday" });
      moon.checker[6] = 0;
    }
  } else if (moon.nextMove <= 24) {
    if (moon.checker[7] === 1) {
      dispatch({ type: "reday" });
      moon.checker[7] = 0;
    }
  } else if (moon.nextMove <= 27) {
    if (moon.checker[8] === 1) {
      dispatch({ type: "reday" });
      moon.checker[8] = 0;
    }
  } else if (moon.nextMove <= 28) {
    if (moon.checker[9] === 1) {
      dispatch({ type: "reday" });
      moon.checker[9] = 0;
    }
  } else if (moon.nextMove <= 30) {
    if (moon.checker[10] === 1) {
      dispatch({ type: "reday" });
      moon.checker[10] = 0;
    }
  } else if (moon.nextMove <= 33) {
    if (moon.checker[11] === 1) {
      dispatch({ type: "reday" });
      moon.checker[11] = 0;
    }
  } else if (moon.nextMove <= 36) {
    if (moon.checker[12] === 1) {
      dispatch({ type: "reday" });
      moon.checker[12] = 0;
    }
  }
};
const sunLight = (sun, dispatch) => {
  if (
    sun.position[0] + sun.xspeed > 259 &&
    sun.position[0] + sun.xspeed <= 350
  ) {
    if (sun.checker[0] === 1) {
      dispatch({ type: "reday" });
      sun.checker[0] = 0;
      sun.top = -70;
    }
  } else if (
    sun.position[0] + sun.xspeed > 249 &&
    sun.position[0] + sun.xspeed <= 259
  ) {
    if (sun.checker[1] === 1) {
      dispatch({ type: "reday" });
      sun.checker[1] = 0;
      sun.top = -60;
    }
  } else if (
    sun.position[0] + sun.xspeed > 239 &&
    sun.position[0] + sun.xspeed <= 249
  ) {
    if (sun.checker[2] === 1) {
      dispatch({ type: "reday" });
      sun.checker[2] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 229 &&
    sun.position[0] + sun.xspeed <= 239
  ) {
    if (sun.checker[3] === 1) {
      dispatch({ type: "reday" });
      sun.checker[3] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 219 &&
    sun.position[0] + sun.xspeed <= 229
  ) {
    if (sun.checker[4] === 1) {
      dispatch({ type: "reday" });
      sun.checker[4] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 199 &&
    sun.position[0] + sun.xspeed <= 219
  ) {
    if (sun.checker[5] === 1) {
      dispatch({ type: "reday" });
      sun.checker[5] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 129 &&
    sun.position[0] + sun.xspeed <= 139
  ) {
    if (sun.checker[6] === 1) {
      dispatch({ type: "reday" });
      sun.checker[6] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 119 &&
    sun.position[0] + sun.xspeed <= 129
  ) {
    if (sun.checker[7] === 1) {
      dispatch({ type: "reday" });
      sun.checker[7] = 0;
    }
  } else if (
    sun.position[0] + sun.xspeed > 99 &&
    sun.position[0] + sun.xspeed <= 109
  ) {
    if (sun.checker[8] === 1) {
      dispatch({ type: "reday" });
      sun.checker[8] = 0;
      sun.top = -60;
    }
  } else if (
    sun.position[0] + sun.xspeed > 49 &&
    sun.position[0] + sun.xspeed <= 79
  ) {
    if (sun.checker[9] === 1) {
      dispatch({ type: "reday" });
      sun.checker[9] = 0;
      sun.top = -70;
    }
  } else if (
    sun.position[0] + sun.xspeed > 29 &&
    sun.position[0] + sun.xspeed <= 39
  ) {
    if (sun.checker[10] === 1) {
      dispatch({ type: "reday" });
      sun.checker[10] = 0;
      sun.top = -80;
    }
  }
};

const DayAndNight = (entities, { touches, dispatch, events }) => {
  let sun = entities.sun;
  let moon = entities.moon;

  if (sun.day) {
    if (sun.position[0] + sun.xspeed <= -2) {
      moon.checker = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      sun.day = false;
      moon.day = false;
    } else {
      sunLight(sun, dispatch);
      sun.position[0] += sun.xspeed;
    }
  } else {
    moon.nextMove -= 1;
    moonLight(moon, dispatch);
    if (moon.nextMove <= 0) {
      sun.position[0] = 400;
      sun.checker = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      sun.day = true;
      moon.day = true;
      moon.nextMove = moon.updateFrequency;
    }
  }
  return entities;
};

export { DayAndNight };
