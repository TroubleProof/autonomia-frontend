import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Main from './pages/Main'
import Perfil from './pages/Perfil'
import Landing from './pages/Landing'
import UserType from './pages/UserType'

const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                    initialRouteName="Landing"
                    screenOptions={{ gestureEnabled: false, headerShown: false }}
            >
                <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: 'Main' }}
                />
                <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' }}
                />
                <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ title: 'Cadastro' }}
                />
                <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ title: 'Perfil' }}
                />
                <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ title: 'Landing' }}
                />
                <Stack.Screen
                name="UserType"
                component={UserType}
                options={{ title: 'UserType' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

export default RootStack