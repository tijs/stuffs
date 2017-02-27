import React, { Component } from 'react';
// import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Canvas } from './components/common';
import Router from './Router';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   loggedIn: null
    // };
  // }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyD5MtWdouUER2IIyye64HXVeID5KVSGr6g',
        authDomain: 'stuffs-473c9.firebaseapp.com',
        databaseURL: 'https://stuffs-473c9.firebaseio.com',
        storageBucket: 'stuffs-473c9.appspot.com'
    });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //     Actions.logout();
    //   } else {
    //     this.setState({ loggedIn: false });
    //     Actions.login();
    //   }
    // });
  }

  render() {
    return (
      <Provider store={store}>
        <Canvas>
          <Router />
        </Canvas>
      </Provider>
    );
  }
}
