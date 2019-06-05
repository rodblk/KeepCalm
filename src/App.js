/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Card from './components/Card'

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View name="NavBar" style={styles.navBar}>
          <Text style={styles.title}>KeepCalm</Text>
          <Button title="Adicionar" color="#6495ED"/>
        </View>

        <View>
          <Card />
        </View>

        <View>
          <Text style={styles.valorRate}>Batimentos</Text>
        </View>
        <View>
          <Text style={styles.valorRate}>100</Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#DCDCDC',
  },
  title: {
    fontSize: 25,
  },
  valorRate: {
    fontSize: 32,
  },
  navBar: {
    margin: 10,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});


