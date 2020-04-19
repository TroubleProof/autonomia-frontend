import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button, ScrollView } from 'react-native'
import styles from './styles'
import {FontAwesome5} from '@expo/vector-icons'

import logo from "../../../assets/logo.png"

const Cadastro = ({navigation}) => {

    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity style={{alignSelf: "flex-start"}} onPress={() => navigation.goBack()}>
                        <FontAwesome5 name='arrow-left' size={20}  color="#4C1B72"/>
                </TouchableOpacity>

                <View style={styles.header}>
                    <Image source={logo}/>
                </View>

                <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
                    <TextInput style={styles.form__input} placeholder='Nome completo'/>
                    <TextInput style={styles.form__input} placeholder='Como quer ser chamado?'/>
                    <TextInput style={styles.form__input} placeholder='Escolha seu gênero'/>
                    <TextInput style={styles.form__input} placeholder='Data de nascimento'/>
                    <TextInput style={styles.form__input} placeholder='CPF'/>
                    <TextInput style={styles.form__input} placeholder='E-mail'/>
                    <TextInput style={styles.form__input} placeholder='Telefone'/>
                    <TextInput style={styles.form__input} placeholder='CEP'/>
                    <TextInput style={styles.form__input} placeholder='Endereço'/>
                    <TextInput style={styles.form__input} placeholder='Complemento'/>
                    <TextInput style={styles.form__input} placeholder='Nº'/>
                    <TextInput style={styles.form__input} placeholder='Bairro'/>
                    <TextInput style={styles.form__input} placeholder='Cidade'/>
                    <TextInput style={styles.form__input} placeholder='UF'/>
                    <Text>Comprovante de residência</Text>
                    <TextInput style={styles.form__input} placeholder='Escolher arquivo...'/>
                    <TextInput style={styles.form__input} placeholder='Criar Senha' secureTextEntry={true}/>
                    <TextInput style={styles.form__input} placeholder='Digite novamente a senha' secureTextEntry={true}/>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>Entrar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

export default Cadastro