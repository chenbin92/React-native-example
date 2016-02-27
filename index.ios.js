/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var {
  AppRegistry,
} = React;

var LandingGuide = require('./app/component/landingGuide');

var Ledoutong = React.createClass({

  getInitialState: function () {
    return {
        showLandingPage: true,
    };
  },

  render: function () {
    if (this.state.showLandingPage) {
      return (
        <LandingGuide />
      );
    } else {
      return null
    }
  }
});

AppRegistry.registerComponent('Ledoutong', () => Ledoutong);
