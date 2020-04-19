import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Main from './pages/Main'

const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                    initialRouteName="Main"
                    screenOptions={{ gestureEnabled: false, headerShown: false }}
            >
                <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: 'Main' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

export default RootStack