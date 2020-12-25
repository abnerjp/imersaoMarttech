import React from 'react';
import Login from '../screens/LoginApp/index';
import {createStackNavigator} from '@react-navigation/stack';
import LoginApp from '../screens/LoginApp/index';
import NewAccount from '../screens/NewAccount';
const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={LoginApp} />
    <AuthStack.Screen name="NewAccount" component={NewAccount} />
  </AuthStack.Navigator>
);
export default AuthRoutes;
