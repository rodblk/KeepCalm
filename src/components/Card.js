import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default class Card extends Component {
    render(){
        return(
            <View>
                <View style={styles.card}>
                    <Text style={styles.nomeRemédio}>Nome do Remédio</Text>
                    <View style={styles.descricao}>
                        <Text>Data Inicial: 01/01/2019</Text>
                        <Text>Data Final: 06/01/2019</Text>
                        <Text>Horários: 05:00, 17:00</Text>
                        <Text>Frequência: Todo dia</Text>
                        <Text>Dosagem: 10ml</Text>
                        <Text>Estoque: 10</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        margin: 20,
        width: 90 + "%",
        height: 155,
        borderColor: '#abc',
    },
    nomeRemédio: {
        borderRadius: 10,
        backgroundColor: '#6495ED',
        color: '#FFF',
        padding: 5,
    },
    descricao: {
        flex: 1,
        margin: 5,
    }
})