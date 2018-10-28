import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

//
export default class App extends Component {

  //
  componentWillMount() {

    // Initialize Firebase
    var config = {

      apiKey: 'AIzaSyDftssu6TgZX8cRKR_4KcquQFk7b6nm6hU',
      authDomain: 'manager-aeb46.firebaseapp.com',
      databaseURL: 'https://manager-aeb46.firebaseio.com',
      projectId: 'manager-aeb46',
      storageBucket: 'manager-aeb46.appspot.com',
      messagingSenderId: '188809725996'

    };

    firebase.initializeApp(config);

  }

  //
  render() {

    //
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (

      <Provider store = {store}>
        <Router />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
