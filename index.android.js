/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import FadeIn from "./src/app/animate/FadeIn";
import App from "./src/app/App";
import DemoInterpolate from "./src/app/animate/DemoInterpolate";
import TestMeasure from "./src/app/TestMeasure";

AppRegistry.registerComponent('AnimationDemo', () => TestMeasure);