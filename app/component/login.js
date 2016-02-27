/**
 * Created by Bruce on Thu Feb 25 2016 08:37:59 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} = React;

var TabBar = require('./tabBar');

var Login = React.createClass({

  _login: function() {
    alert("Login success!");
    this.props.navigator.resetTo({
      component: TabBar,
      title: 'Home',
    })
  },

  render: function() {
    return (
      <View style={styles.loginContainer}>
        <Image
          style={styles.logoImage}
          source={{uri: 'http://7xr387.com1.z0.glb.clouddn.com/logo2.png'}} />
        <TextInput
          style={styles.accountInput}
          placeholder='Phone Number' />
          <View style={{height:1,backgroundColor:'#f4f4f4'}} />

        <TextInput
          style={styles.passowrdInput}
          placeholder='Passowrd'
          password={true} />

        <View style={styles.loginButton}>
          <Text style={{color: '#fff'}} onPress={this._login}>Login</Text>
        </View>

        <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
          <Text style={styles.viewUnlogin}>
               无法登录?
          </Text>
          <Text style={styles.viewRegister}>
               新用户
          </Text>
        </View>

      </View>
    )
  }
})

var styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  logoImage:{
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 120,
    alignSelf: 'center',
  },

  accountInput:{
    backgroundColor: '#fff',
    marginTop: 20,
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  passowrdInput:{
    backgroundColor: '#fff',
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  loginButton:{
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewUnlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },

  viewRegister:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
})

module.exports = Login;
