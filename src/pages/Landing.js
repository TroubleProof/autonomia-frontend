import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'

const Landing = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.landingHeader}>
                    <Image style={{width: 80, height: 80}} source={require('../../assets/logo_pw.png')}/>
                    <Text 
                    style={{color:"#4c1b72", fontWeight: "bold", fontSize: 25}}>
                        {`Mais segurança \npara você e o \nseu negócio`}
                    </Text>
                </View>
                <View style={styles.inputs}>
                    <Image style={{width: 315, height: 270}} source={require('../../assets/people.png')}/>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserType')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Começar</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome5 name='lightbulb' size={20}  color="#F3A628"/>
                        <Text style={{marginLeft: 10}}>Saber mais sobre o app</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Landing