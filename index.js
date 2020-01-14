/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
//import AnimationTest from "./testing/AnimationTest";
//import ShadowTest from './testing/ShadowTest';
import LevelTrack from "./Headers/LevelTrack.js";
import LevelOne from "./Level/LevelOne.js";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => LevelOne);
