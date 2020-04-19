import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {Entypo} from '@expo/vector-icons'

const UserType = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.landingHeader}>
                    <Image style={{width: 80, height: 80, alignContent: "flex-end"}} source={require('../../assets/logo_pw.png')}/>
                </View>

                <View style={styles.inputs}>
                    <Image style={{width: 315, height: 270}} source={require('../../assets/moça.png')}/>

                    <TouchableOpacity style={styles.buttonUserType} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Quero Prestar serviços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonUserType} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Quero contratar serviços</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <Entypo name='login' size={20}  color="#F3A628"/>
                        <Text style={{marginLeft: 10,}}>Já é cadastrado? Faça login</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default UserType