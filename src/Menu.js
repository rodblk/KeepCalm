// import React from 'react'
// import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

// import App from './App'
// import AddRemedio from './screens/AddRemedio'
// import ListaRemedio from './screens/ListaRemedio'

// export default createDrawerNavigator({
//     App: {
//         screen: () => <App/>,
//         navigationOptions: { title: 'Tela Inicial'}
//     },
//     AddRemedio: {
//         screen: () => <AddRemedio/>,
//         navigationOptions: { title: 'Adicionar Remédio' }
//     },
//     ListaRemedio: {
//         screen: () => <ListaRemedio/>,
//         navigationOptions: { title: 'Lista de Remédios' }
//     }
// }, {drawerWidth: 300})

// export createStackNavigator({
//     App: App,
//     AddRemedio: AddRemedio,
//     ListaRemedio: ListaRemedio
// })

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import App from './App'
import AddRemedio from './screens/AddRemedio'
import ListaRemedio from './screens/ListaRemedio'
import Alerta from './screens/Alerta'

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  AddRemedio: {
    screen:AddRemedio
  },
  ListaRemedio: {
    screen: ListaRemedio
  },
  Alerta: {
    screen: Alerta
  }
});

export default AppNavigator;
