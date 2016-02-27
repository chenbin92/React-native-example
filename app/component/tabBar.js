/**
 * Created by Bruce on Sat Feb 27 2016 15:41:18 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var Message = require('../message');
var Contact = require('../contact');
var Checkin = require('../checkin');
var Me = require('../me');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} = React;

var TabBar = React.createClass({
  getInitialState: function () {
    return {
        selectedTab: 'message',
    };
  },

   render: function () {
      return (
        <TabBarIOS
          tintColor="#38AEF6"
          barTintColor="#F9F9F9">

          <Icon.TabBarItem
            title="Message"
            iconName="ios-home-outline"
            selectedIconName="ios-home"
            selected={this.state.selectedTab === 'message'}
            onPress={() => {
              this.setState({
                selectedTab: 'message',
              });
            }}>
            <NavigatorIOS
              barTintColor='#5F97F6'
              titleTextColor='#fff'
              style={styles.navigator}
              initialRoute={{
                component: Message,
                passProps: {},
                title: 'Message',
              }}/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
            title="Contacts"
            iconName="ios-person-outline"
            selectedIconName="ios-person"
            selected={this.state.selectedTab === 'contacts'}
            onPress={() => {
              this.setState({
                selectedTab: 'contacts',
              });
            }}>
            <NavigatorIOS
              barTintColor='#5F97F6'
              titleTextColor='#fff'
              style={styles.navigator}
              initialRoute={{
                component: Contact,
                passProps: {},
                title: 'Contacts',
              }}/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
            title="Checkin"
            iconName="ios-navigate-outline"
            selectedIconName="ios-navigate"
            selected={this.state.selectedTab === 'checkin'}
            onPress={() => {
              this.setState({
                selectedTab: 'checkin',
              });
            }}>
            <NavigatorIOS
              barTintColor='#5F97F6'
              titleTextColor='#fff'
              style={styles.navigator}
              initialRoute={{
                component: Checkin,
                passProps: {},
                title: 'Checkin',
              }}/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
            title="Me"
            iconName="ios-gear-outline"
            selectedIconName="ios-gear-outline"
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
              this.setState({
                selectedTab: 'me',
              });
            }}>
            <NavigatorIOS
              barTintColor='#5F97F6'
              titleTextColor='#fff'
              style={styles.navigator}
              initialRoute={{
                component: Me,
                passProps: {},
                title: 'Me',
              }}/>
          </Icon.TabBarItem>
        </TabBarIOS>
      );
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

module.exports = TabBar;
