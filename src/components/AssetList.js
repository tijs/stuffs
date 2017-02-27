import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { ScrollView, AlertIOS, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AssetItem from './AssetItem';
import { Spinner } from './common';

class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentWillMount() {
    this.itemsRef = firebase.database().ref();
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      const items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataLoaded: true,
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  // removeItem(asset) {
    // AlertIOS.prompt(
    //   'Complete',
    //   null,
    //   [
    //     { text: 'Complete', onPress: () => this.itemsRef.child(asset._key).remove() },
    //     { text: 'Cancel', onPress: () => console.log('Cancel') }
    //   ],
    //   'default'
    // );
  // }

  renderItem(asset) {
    return (
      <AssetItem asset={asset} />
    );
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <ScrollView>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem.bind(this)}
          />
        </ScrollView>
      );
    }

    return <Spinner size="large" />;
  }
}

const mapStateToProps = state => {
  return { assets: state.assets };
};

export default connect(mapStateToProps)(AssetList);
