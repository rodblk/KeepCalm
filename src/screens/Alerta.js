/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import Card from '../components/Card'

export default class ListaRemedio extends Component {

  static navigationOptions = {
      title: 'Lista',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

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
      alert(<Text style={styles.valorRate}>Cuidado, batimento cardíado alto</Text>)
    }else{
      alert(<Text style={styles.valorRate}>Ola mundoooooo</Text>)
    }
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <View name="NavBar" style={styles.navBar}>
            <Text style={styles.title}>KeepCalm</Text>

            <View style={styles.contentCentral}>
              <Text style={styles.aviso}>Cuidado seu ritmo cardíaco está muito alto!</Text>
            </View>
            
          </View>

      </View>
    </ScrollView>
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
  },
  aviso: {
    fontSize: 25,
    margin: 25
  }
});
