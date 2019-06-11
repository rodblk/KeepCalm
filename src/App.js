/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
//var request = require('request');
//url = 'http://172.30.10.152:5000'



export default class App extends Component {

  static navigationOptions = {
      title: 'Home',
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

    this.state = {
      batimento: 87
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
    //var myRequest = new Request('http://172.30.10.152:5000/')
    //var myURL = myRequest.url;

    //request('http://172.30.10.152:5000', function (error,response, body) {
    //  })

    if(parseInt(this.state.batimento, 10) == 100){
      alert(request.response)
    }else{
      alert(request.response)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View name="NavBar" style={styles.navBar}>
          <Text style={styles.title}>KeepCalm</Text>
        </View>

        <View style={styles.contentCentral}>
          <Text style={styles.valorRate}>Batimentos</Text>
        </View>
        <View style={styles.contentCentral}>
          <Text style={styles.valorRate}>{this.state.batimento}</Text>
          <Button title="Alertar" onPress={() => this.props.navigation.navigate("Alerta")} color="#6495ED"/>
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
  },
  contentCentral: {
    justifyContent: "center",
    alignSelf: "center"
  }
});
