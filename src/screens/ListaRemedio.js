/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card'

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
      alert(<Text style={styles.valorRate}>Cuidado, batimento cardíado alto</Text>)
    }else{
      alert(<Text style={styles.valorRate}>Ola mundoooooo</Text>)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View name="NavBar" style={styles.navBar}>
          <Text style={styles.title}>KeepCalm</Text>
        </View>

        <View>
          <Card 
          nome="Dorflex" 
          dataInicial="01/01/2019" 
          dataFinal="05/01/2019"
          horario="05:00"
          frequencia="terça, quinta"
          dosagem="1"
          estoque="15"/>

          <Card 
          nome="Paracetamol" 
          dataInicial="12/01/2019" 
          dataFinal="13/01/2019"
          horario="09:00"
          frequencia="terça"
          dosagem="1"
          estoque="5"/>

          <Card 
          nome="Remedio 3" 
          dataInicial="10/03/2019" 
          dataFinal="20/03/2019"
          horario="13:00"
          frequencia="sexta, sabádo, domingo"
          dosagem="10ml"
          estoque="10"/>
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


