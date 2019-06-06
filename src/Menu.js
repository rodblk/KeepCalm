import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import App from './App'
import AddRemedio from './screens/AddRemedio'
import ListaRemedio from './screens/ListaRemedio'

export default createDrawerNavigator({
    App: {
        screen: () => <App/>,
        navigationOptions: { title: 'Tela Inicial'}
    },
    AddRemedio: {
        screen: () => <AddRemedio/>,
        navigationOptions: { title: 'Adicionar Remédio' }
    },
    ListaRemedio: {
        screen: () => <ListaRemedio/>,
        navigationOptions: { title: 'Lista de Remédios' }
    }
}, {drawerWidth: 300})