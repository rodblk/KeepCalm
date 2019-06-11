import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS,
  Button,
} from 'react-native';

import { db } from '../config';

let addItem = nome => {
  db.ref('/items').push({
    name: nome,
  });
};



export default class AddItem extends Component {
  
    constructor(){
        super()
        this.state={
            name: '',
            data: ''
        }
    }

  updateValue(text, field){
    this.setState({[field]:text});
  }

  submit(){
      let collection={}
      collection.name=this.state.name,
      collection.data=this.state.data
      console.warn(collection)
  }

//   handleChange = e => {
//     this.setState({
//       name: e.nativeEvent.text
//     });
//   };
//   handleSubmit = () => {
//     addItem(this.state.name);
//     AlertIOS.alert('Item saved successfully');
//   };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChangeText={(text) => this.updateValue(text, 'name')}/>
        <TextInput style={styles.itemInput} onChangeText={(text) => this.updateValue(text, 'data')}/>
        {/* <TextInput style={styles.itemInput} ref= "dataInicial" onChangeText={(diaInicial) => this.setState({diaInicial})} value={this.state.diaInicial}/> */}
        {/* <TextInput style={styles.itemInput} onChange={this.handleChange} /> */}
        <Button style={styles.buttom} onPress={() => this.submit()} title="Adicionar"/>
        {/* <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});