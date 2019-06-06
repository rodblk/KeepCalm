/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AddRemedio from './src/screens/AddRemedio'
import Example from './src/screens/Example'

AppRegistry.registerComponent(appName, () => Example);
