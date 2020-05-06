/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './Screens/Test';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
//console.disableYellowBox=false;
AppRegistry.registerComponent(appName, () => App);
