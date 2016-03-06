/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var {
  StatusBarIOS,
  AppRegistry,
} = React;

var LandingGuide = require('./app/component/landingGuide');
var TabBar = require('./app/component/tabBar');

// 设置状态栏: 参数1为白色字体，2为黑色字体
StatusBarIOS.setStyle(1);

var Ledoutong = React.createClass({

  getInitialState: function () {
    return {
        showLandingPage: false,
    };
  },

  render: function () {
    if (this.state.showLandingPage) {
      return (
        <LandingGuide />
      );
    } else {
      return (
        <TabBar />
      )
    }
  }
});

AppRegistry.registerComponent('Ledoutong', () => Ledoutong);
