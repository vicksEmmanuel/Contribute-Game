import React, { Component } from "react";
import { Dimensions } from "react-native";
import Pod from "../../Construction/Pod";

let timer = 0;
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const makeRandOnce = length => {
  const x = [];
  for (let i = 1; i <= length; i++) {
    let temp = randomBetween(0, length);

  }
  return x;
};
const Level = (entities, { touches, dispatch, events, time }) => {
  let sun = entities.sun;
  let moon = entities.moon;
  let pods = [];
  Object.keys(entities).forEach(key => {
    if (key.indexOf("pod") === 0 && entities.hasOwnProperty(key)) {
      pods.push(entities[key]);
    }
  });

  timer += 1;
  if (timer === 4) {
    //pods[randomBetween(0, pods.length)].popping = true;
    timer = 0;
  }

  return entities;
};

export { Level };
