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
import AddRemedio from './screens/AddRemedio'
import Maps from './screens/Example'

export default class App extends Component {

  constructor(){
    super()
    this.state={
        batimento: '120'
    }
  }

  randomIntFromInterval(min,max) // min and max included
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  // setInterval( function() => {
  //   this.state.batimento = randomIntFromInterval(90, 120)
  // }, 3000)

  

  testaSeTaAlto(){
    if(parseInt(this.state.batimento, 10) == 100){
      alert('Cuidado, batimento cardíado alto')
    }else{
      alert('Ola mundoooooo')
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View name="NavBar" style={styles.navBar}>
          <Text style={styles.title}>KeepCalm</Text>
          <Button title="Adicionar" color="#6495ED"/>
          {/* <Maps/> */}
        </View>

        {/* <AddRemedio/> */}

        <View style={styles.contentCentral}>
          <Text style={styles.valorRate}>Batimentos</Text>
        </View>
        <View style={styles.contentCentral}>
          <Text style={styles.valorRate}>{this.state.batimento}</Text>
          <Button title="Alertar" onPress={() => this.testaSeTaAlto()} color="#6495ED"/>
        </View>


        {/* <View>
          <Card />
        </View> */}

        
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
  },
  contentCentral: {
    justifyContent: "center",
    alignSelf: "center"
  }
});


