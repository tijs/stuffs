import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Sheet } from './common';

class LogoutForm extends Component {
  render() {
    return (
      <Sheet>
        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      </Sheet>
    );
  }
}

export default LogoutForm;
