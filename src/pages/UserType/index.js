import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import {FontAwesome5} from '@expo/vector-icons'

import styles from './styles'

import logo from "../../../assets/logo.png";
import banner from "../../assets/moca.png"

const UserType = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome5 name='arrow-left' size={20}  color="#4C1B72"/>
                    </TouchableOpacity>

                    <Image style={styles.header__logo} source={logo}/>
                </View>

                    <Image source={banner}/>

                <View style={styles.footer}>

                    <TouchableOpacity style={styles.footer__button} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.footer__textBtn}>Quero Prestar serviços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footer__button} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.footer__textBtn}>Quero contratar serviços</Text>
                    </TouchableOpacity>

                    <View style={styles.footer__loginBtn}>
                        
                        <Text style={styles.footer__text}>
                            Já é cadastrado? 
                        </Text>
                    
                        <TouchableOpacity style={{ alignItems: "center",
        display: "flex", flexDirection: "row"}} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.footer__textLogin}>
                                Faça login
                            </Text>
                                <FontAwesome5 name='sign-in-alt' size={20}  color="#F3A628"/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        </>
    )
}

export default UserType