import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Sheet, Input } from './common';

class AssetForm extends Component {
  state = { number: '', name: '', location: '', tags: '', loading: false };

  componentWillMount() {
    this.itemsRef = firebase.database().ref();
    this.listenForItems(this.itemsRef);
  }

  submitForm(props) {
    // TODO
    firebase.database().ref('assets/' + props.id).set({
      number: props.number,
      name: props.name,
      location: props.location,
      tags: props.tags
    });
  }

  render() {
    return (
      <Sheet>
        <Input
          label="Number"
          placeholder="AZ1234"
          value={this.state.number}
          onChangeText={number => this.setState({ number })}
        />

        <Input
          label="Name"
          placeholder="Iron Man #1, 2017"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />

        <Input
          label="Location"
          placeholder="Guest room"
          value={this.state.location}
          onChangeText={location => this.setState({ location })}
        />

        <Input
          label="Tags"
          placeholder="Comic, Robert, IronMan"
          value={this.state.tags}
          onChangeText={tags => this.setState({ tags })}
        />

        <Button onPress={this.onButtonPress.bind(this)}>
          Save
        </Button>
      </Sheet>
    );
  }
}

// AssetForm = reduxForm({
//   form: 'asset' // a unique name for this form
// })(AssetForm);

export default AssetForm;
