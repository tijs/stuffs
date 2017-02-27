import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from '../../styles';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputStyle: styles.input };
  }

  setFocus(hasFocus) {
    if (hasFocus || this.value) {
      this.setState({ inputStyle: [styles.input, styles.inputFocus] });
    } else {
      this.setState({ inputStyle: styles.input });
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          onFocus={this.setFocus.bind(this, true)}
          onBlur={this.setFocus.bind(this, false)}
          style={this.state.inputStyle}
        />
      </View>
    );
  }
}

export { Input };
