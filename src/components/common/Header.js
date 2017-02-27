import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.headerText}</Text>
  </View>
);

export { Header };
