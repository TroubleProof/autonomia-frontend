import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'

const Configuracoes = ({navigation}) => {
    const [data, SetData] = useState([
        {
            id: "1",
            titulo: "Conta",
            mensagem: "Foto de perfil, numero de telefone, email",
            icon: ""
        },
        {
            id: "2",
            titulo: "Segurança",
            mensagem: "Redefinir senha, autenticação em dois fatores",
            icon: ""
        },
        {
            id: "3",
            titulo: "Privacidade",
            mensagem: "Controle de visualizações, mensagens",
            icon: ""
        },
    ])

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.mainText}>configuracoes</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return (
                            <View 
                            style={styles.item}>
                                <View >
                                    <Text>{item.titulo}</Text>
                                    <Text>{item.mensagem}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default Configuracoes