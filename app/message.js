/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var MessageDetail = require('./messageDetail');

var ListViewExample = React.createClass({
  // 这里返回一个对象，设置组件的初始化状态，
  // 后面就可以通过 this.state 来获得这个对象
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2  // 用于判断当前数据变化的标准
    });
    return {
      dataSource: ds.cloneWithRows([ // cloneWithRows方法用于复制克隆，相当于拷贝一份当前数据
        'row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10','row 11', 'row 12'
      ]),
    };
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource} // 数据源
        renderRow={(rowData) => <Text style={styles.rowText}>{rowData}</Text>} /> // 接受数组中的每个数据作为参数, 作为listview的每一行（for循环）
    );
  }
});

var styles = StyleSheet.create({
  rowText: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#eee'
  },
});


module.exports = ListViewExample;
