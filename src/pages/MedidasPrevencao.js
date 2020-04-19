import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'

const MedidasPrevencao = ({navigation}) => {
    const [data, SetData] = useState([
        {
            id: "1",
            titulo: "Limpe os equipamentos",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "2",
            titulo: "Troque de sapatos",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "3",
            titulo: "Evite contato físico",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "4",
            titulo: "Mantenha distância",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "5",
            titulo: "use máscara",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "6",
            titulo: "Higienize as mãos",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        },
        {
            id: "7",
            titulo: "Atue na sua região",
            mensagem: "Faça a devida limpesa em seus equipamentos \nentre um serviço e outro",
            icon: ""
        }
    ])

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.mainText}>Proteja-se contra o corona vírus</Text>
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

export default MedidasPrevencao