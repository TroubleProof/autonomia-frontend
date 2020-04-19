import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button, ScrollView } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'

const Cadastro = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                <Image style={{width: 150, height: 150}} source={require('../../assets/logo_pw.png')}/>
                </View>
                <ScrollView contentContainerStyle={styles.inputs}>
                    <TextInput style={styles.input} placeholder='Nome completo'/>
                    <TextInput style={styles.input} placeholder='Como quer ser chamado?'/>
                    <TextInput style={styles.input} placeholder='Escolha seu gênero'/>
                    <TextInput style={styles.input} placeholder='Data de nascimento'/>
                    <TextInput style={styles.input} placeholder='CPF'/>
                    <TextInput style={styles.input} placeholder='E-mail'/>
                    <TextInput style={styles.input} placeholder='Telefone'/>
                    <TextInput style={styles.input} placeholder='CEP'/>
                    <TextInput style={styles.input} placeholder='Endereço'/>
                    <TextInput style={styles.input} placeholder='Complemento'/>
                    <TextInput style={styles.input} placeholder='Nº'/>
                    <TextInput style={styles.input} placeholder='Bairro'/>
                    <TextInput style={styles.input} placeholder='Cidade'/>
                    <TextInput style={styles.input} placeholder='UF'/>
                    <Text>Comprovante de residência</Text>
                    <TextInput style={styles.input} placeholder='Escolher arquivo...'/>
                    <TextInput style={styles.input} placeholder='Criar Senha' secureTextEntry={true}/>
                    <TextInput style={styles.input} placeholder='Digite novamente a senha' secureTextEntry={true}/>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Entrar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

export default Cadastro