import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthProvider} from './contexts/auth';
import ListaLivros from './screens/ListaLivros';
import DetalheLivro from './screens/DetalheLivro';
import LoginApp from './screens/LoginApp';
import NewAccount from './screens/NewAccount';
import Routes from './routes';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <AuthProvider>
        {/* <Stack.Navigator headerMode="none">

          <Stack.Screen name="NewAccount" component={NewAccount} />
          <Stack.Screen name="LoginApp" component={LoginApp} />
          <Stack.Screen name="ListaLivros" component={ListaLivros} />
          <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
          
        </Stack.Navigator> */}

          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
