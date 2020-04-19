import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from './styles'
import {FontAwesome5} from '@expo/vector-icons'

import logo from "../../../assets/logo.png"

const Login = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity style={{alignSelf: "flex-start"}} onPress={() => navigation.goBack()}>
                        <FontAwesome5 name='arrow-left' size={20}  color="#4C1B72"/>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Image source={logo}/>
                </View>
                <View style={styles.main}>
                    <TextInput style={styles.main__input}
                        placeholderTextColor="#656363"
                        placeholder='Digite seu email'

                        />
                    <TextInput style={styles.main__input}
                        placeholderTextColor="#656363"
                        placeholder='Digite sua senha'/>

                    <TouchableOpacity >
                        <Text style={styles.main__textForgot}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.main__button} onPress={() => navigation.navigate('Main')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                
                    <View style={styles.registerWrapper}>

                        <Text style={styles.registerWrapper__text}>Não tem conta?</Text>
                        <TouchableOpacity style={styles.registerWrapper__button} onPress={() => navigation.navigate('Cadastro')}>
                            <Text style={styles.registerWrapper__textRegister}>Cadastre-se</Text>
                            <FontAwesome5 name='user-plus' size={20}  color="#F3A628"/>
                        </TouchableOpacity>
                    </View>
            </View>
        </>
    )
}

export default Login