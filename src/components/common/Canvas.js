import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';

const Canvas = (props) => (
  <View style={styles.canvas}>
    {props.children}
  </View>
);

export { Canvas };
