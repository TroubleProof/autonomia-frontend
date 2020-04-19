import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from './styles';
import {FontAwesome5} from '@expo/vector-icons'

import landingBanner from "../../assets/landing-banner.png";
import logo from "../../../assets/logo.png";

const Landing = ({navigation}) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.header__img} source={logo}/>
                    <Text 
                    style={styles.header__text}>
                        {`Mais segurança \npara você e o \nseu negócio`}
                    </Text>
                </View>

                <Image style={styles.banner} source={landingBanner}/>
                
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer__button} onPress={() => navigation.navigate('UserType')}>
                        <Text style={styles.footer__textBtn}>Começar</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome5 name='lightbulb' size={20}  color="#F3A628"/>
                        <Text style={styles.footer__text}>Saber mais sobre o app</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Landing