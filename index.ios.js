/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} = React;

var Message = require('./app/message');
var Contact = require('./app/contact');
var Checkin = require('./app/checkin')
var Me = require('./app/me');

var Icon = require('react-native-vector-icons/Ionicons');

var Ledoutong = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'message',
    };
  },

  render: function() {
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: '#e8e8e8',
    borderRadius: 4,
  },
});
AppRegistry.registerComponent('Ledoutong', () => Ledoutong);
