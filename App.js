/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import PushService from './services/PushService';
import FeedsPage from "./src/FeedsPage";
const MessageBarAlert = require('react-native-message-bar').MessageBar;
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    if (Platform.OS === 'ios') {
      PushService._iOS_initPush();
    } else {
      PushService._an_initPush();
    }
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeEventListener('register');
    }
    MessageBarManager.unregisterMessageBar();
  }

  render() {
    // <MessageBarAlert ref="alert" />
    return (
        <FeedsPage
            channelName="Klein Channel"
        />
    );
  }
}
