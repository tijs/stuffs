import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import * as actions from '../actions';

class AssetItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { asset, onpress } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={onpress}
        key={asset.key} style={styles.listItem}
      >
        <View style={styles.assetHeader}>
          <Image
            style={styles.listImage}
            source={{ uri: asset.image }}
          />
          <Text style={styles.listTitle}>{asset.title}</Text>
          <Text style={styles.listText}>{asset.created_at}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, actions)(AssetItem);
