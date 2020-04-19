import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'
import DatePicker from 'react-native-datepicker'

const Agendamento = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.mainText}>Agendar Serviço</Text>
                </View>
                <View style={styles.inputs}>
                    <DatePicker mode="date"/>
                    <DatePicker mode="time"/>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserType')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>confirmar agendamento</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={{width: 80, height: 80}} source={require('../../assets/radioactive.png')}/>
                    <Text>Importante!</Text>
                    <Text>{`Não estamos em uma situação tipica. \nEvite ao maximo contato com as pessoas que vem de fora.`}</Text>
                </View>
            </View>
        </>
    )
}

export default Agendamento