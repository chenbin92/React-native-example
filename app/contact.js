/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
  AlertIOS,
  TouchableOpacity,
  ActivityIndicatorIOS
} = React;

// API URL
var API_URL = "http://7xr387.com1.z0.glb.clouddn.com/users_data.json";

var Contact = React.createClass({
 // initial state
  getInitialState: function() {
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    }

    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    }

    return {
      loaded: false,
      dataSource: new ListView.DataSource({
        getSectionData           : getSectionData,
        getRowData               : getRowData,
        rowHasChanged            : (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged  : (s1, s2) => s1 !== s2
      })
    }
  },

  // loading data
  componentDidMount: function() {
    this._fetchData()
  },

  // fetch data
  _fetchData: function() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseData) => {
        var organizations = responseData.results,
            length = organizations.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            organization,
            users,
            userLength,
            user,
            i,
            j;

        console.log(organizations)

        for(i=0; i<length; i++) {
          organization = organizations[i];

          // Add Section to Section ID Array
          sectionIDs.push(organization.id);

          // Set Value for Section ID that will be retrieved by getSectionData
          dataBlob[organization.id] = organization.organization;

          users = organization.users;
          userLength = users.length;

          // Initialize Empty RowID Array for Section Index
          rowIDs[i] = [];

          for(j = 0; j < userLength; j++) {
            user = users[j].user;

            // Add Unique Row ID to RowID Array for Section
            rowIDs[i].push(user.md5);

            // Set Value for unique Section+Row Identifier that will be retrieved by getRowData
            dataBlob[organization.id + ':' + user.md5] = user;
          }
        }

        // set state
        this.setState({
          dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
          loaded     : true
        });
      }).done();
  },

  render: function() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return this.renderListView();
  },

  renderLoadingView: function() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>User List</Text>
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={!this.state.loaded}
            style={[styles.activityIndicator, {height: 80}]}
            size="large" />
        </View>
      </View>
    )
  },

  renderListView: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>User List</Text>
        </View>
        <ListView
          dataSource = {this.state.dataSource}
          style      = {styles.listview}
          renderRow  = {this.renderRow}
          renderSectionHeader = {this.renderSectionHeader} />
      </View>
    )
  },

  renderSectionHeader: function(sectionData, sectionID) {
    return (
      <View style={styles.section}>
        <Text style={styles.text,{color: '#000',paddingLeft: 10}}>{sectionData}</Text>
      </View>
    );
  },

  renderRow : function (rowData, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={() => this.onPressRow(rowData, sectionID)}>
        <View style={styles.rowStyle}>
          <Image
            style={styles.userAvatar}
            source={{uri: rowData.avatar}} />
          <View style={styles.userName}>
            <Text style={styles.rowText}>{rowData.username} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },

  onPressRow : function (rowData, sectionID) {
    var buttons = [
      {
        text : 'Cancel'
      },
      {
        text    : 'OK',
        onPress : () => this.createCalendarEvent(rowData, sectionID)
      }
    ]
    AlertIOS.alert(rowData.email, null, null);
  }
});

var styles = StyleSheet.create({
 container: {
    flex: 1
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 25
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  text: {
    color: '#fff',
    paddingHorizontal: 8,
    fontSize: 16
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 10,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#E0E0E0',
    borderWidth: 1
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userName: {
    flex: 1,
    justifyContent: "center",
  },
  rowText: {
    color: '#212121',
    fontSize: 16,
    padding: 16,
  },
  subText: {
    fontSize: 14,
    color: '#757575'
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#eee',
  }
});

module.exports = Contact;
