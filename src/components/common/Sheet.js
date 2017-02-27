import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';

const Sheet = (props) => (
  <View style={styles.sheet}>
    {props.children}
  </View>
);

export { Sheet };
