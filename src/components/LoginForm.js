import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { Button, Sheet, Input } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Sheet>
        <Input
          label="Email"
          placeholder="you@example.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />

        <Input
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          secureTextEntry
        />

        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>

      </Sheet>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps');
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// IDEA: Using setState();
// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import firebase from 'firebase';
// import { Button, Sheet, Input, Spinner } from './common';
// import styles from '../styles';
//
// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSucces.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSucces.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }
//
//   onLoginFail() {
//     this.setState({
//       loading: false,
//       error: 'Authentication failed'
//     });
//   }
//
//   onLoginSucces() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="small" />;
//     }
//
//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         Log in
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//       <Sheet>
//         <Input
//           label="Email"
//           placeholder="you@example.com"
//           value={this.state.email}
//           onChangeText={email => this.setState({ email })}
//         />
//
//         <Input
//           label="Password"
//           placeholder="password"
//           value={this.state.password}
//           onChangeText={password => this.setState({ password })}
//           secureTextEntry
//         />
//
//       <Text style={styles.errorText}>
//         {this.state.error}
//       </Text>
//
//       {this.renderButton()}
//       </Sheet>
//     );
//   }
// }
//
// export default LoginForm;
