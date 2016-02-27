/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');

var LandingSwiper = require('./landingSwiper');

var {
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var LandingGuide = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute = {{name:"landingSwiper", component: LandingSwiper}}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    )
  }
})

module.exports = LandingGuide;
