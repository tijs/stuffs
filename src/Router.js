import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';
import AssetForm from './components/AssetForm';
import AssetList from './components/AssetList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Log in" initial />
        <Scene key="logout" component={LogoutForm} title="Log out" />
      </Scene>
      <Scene key="main">
        <Scene
          key="list"
          component={AssetList}
          title="Stuffs"
          rightTitle="Add"
          onRight={() => Actions.form()}
          initial
        />
        <Scene key="form" component={AssetForm} title="Add stuff" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
