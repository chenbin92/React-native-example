/**
 * Created by Bruce on Tue Feb 23 2016 22:25:21 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Modal   = require('react-native-modalbox');
var Login = require('./login');

var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  NavigatorIOS,
} = React;

var Dimensions = require('Dimensions');
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

var LandingSwiper = React.createClass({

  _navigateToSubview: function() {
    this.props.navigator.push({
      component: Login,
      title: "",
      navigationBarHidden: true,
    })
  },

  render: function() {

    return (
      <Swiper style={styles.wrapper}
         paginationStyle={{bottom: 60}}
        loop={false}>

        <View style={styles.slide1}>
          <Text style={styles.text}>遇见你是最美好的开始</Text>
        </View>

        <View style={styles.slide2}>
          <Text style={styles.text}>一切等待不在是等待</Text>
        </View>

        <View style={styles.slide3}>
          <View style={styles.slideText}>
            <Text style={styles.text}>爱情原来可以这样的微妙</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.leftButton}>
              <Text style={styles.signInButton} onPress={this._navigateToSubview}>Sign In</Text>
            </View>
            <View style={styles.rightButton}>
              <Text style={styles.loginButton}>Login</Text>
            </View>
          </View>
        </View>
      </Swiper>
    )
  }
});

var styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slideText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  signInButton: {
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    width: windowWidth/2,
  },

  loginButton: {
    backgroundColor: '#3B5998',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    width: windowWidth/2,
  },

  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})


module.exports = LandingSwiper;
