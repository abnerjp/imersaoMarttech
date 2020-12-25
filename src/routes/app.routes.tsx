import React from 'react';
import Login from '../screens/LoginApp/index';

import { createStackNavigator } from '@react-navigation/stack';
import ListaLivros from '../screens/ListaLivros';
import DetalheLivro from '../screens/DetalheLivro';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="ListaLivros" component={ListaLivros} />
    <AppStack.Screen name="DetalheLivro" component={DetalheLivro} />
  </AppStack.Navigator>
);

export default AppRoutes;