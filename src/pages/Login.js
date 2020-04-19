import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'

const Login = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={{width: 150, height: 150}} source={require('../../assets/logo_pw.png')}/>
                </View>
                <View style={styles.inputs}>
                    <TextInput style={styles.input}
                        placeholder='Digite seu email'

                        />
                    <TextInput style={styles.input}
                        placeholder='Digite sua senha'/>
                    <TouchableOpacity >
                        <Text style={styles.secondaryText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Entrar</Text>
                    </TouchableOpacity>
                    <Text>Não tem conta? Cadastre-se</Text>
                </View>
            </View>
        </>
    )
}

export default Login