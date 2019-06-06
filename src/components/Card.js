import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default function(props){
    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.nomeRemédio}>{props.nome}</Text>
                <View style={styles.descricao}>
                    <Text>Data Inicial: {props.dataInicial}</Text>
                    <Text>Data Final: {props.dataFinal}</Text>
                    <Text>Horário: {props.horario}</Text>
                    <Text>Frequência: {props.frequencia}</Text>
                    <Text>Dosagem: {props.dosagem}</Text>
                    <Text>Estoque: {props.estoque}</Text>
                </View>
            </View>
        </View>
        
    )
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