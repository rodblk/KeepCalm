import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import App from './App'
import AddRemedio from './screens/AddRemedio'

export default createDrawerNavigator({
    App: {
        screen: () => <App/>,
        navigationOptions: { title: 'Tela Inicial'}
    },
    AddRemedio: {
        screen: () => <AddRemedio/>,
        navigationOptions: { title: 'Adicionar Remédio' }
    }
}, {drawerWidth: 300})