import React, { Component } from 'react'
import { View, FormLabel, FormInput, FormValidationMessage } from 'react-native'

export default class AddRemedio extends Component {

    // function somefunction() {
    //     let a = 0
    //     return <Text>{a}</Text>
    // }

    render(){
        return(
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={somefunction}/>
                <FormValidationMessage>Error message</FormValidationMessage>
            </View>
        )
    }
}