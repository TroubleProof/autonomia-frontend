import React, {useState, useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, FlatList, Button, ScrollView } from 'react-native'
import styles from '../styles/styles'
import {FontAwesome5} from '@expo/vector-icons'
import Card from '../components/Card'

const Main = ({navigation}) => {
    const [data, setData] = useState([
        {
            id: "1",
            nome: "Agnys Bueno",
            servico: "Desenvolvedora Full Stack",
            area: "Tecnologia",
            distancia: 6.2,
            nota: "4,2",
            foto: ""
        },
        {
            id: "2",
            nome: "Agnys Bueno",
            servico: "Desenvolvedora Full Stack",
            area: "Tecnologia",
            distancia: 6.2,
            nota: "4,2",
            foto: ""
        },
        {
            id: "3",
            nome: "Agnys Bueno",
            servico: "Desenvolvedora Full Stack",
            area: "Tecnologia",
            distancia: 6.2,
            nota: "4,2",
            foto: ""
        },
        {
            id: "4",
            nome: "Agnys Bueno",
            servico: "Desenvolvedora Full Stack",
            area: "Tecnologia",
            distancia: 6.2,
            nota: "4,2",
            foto: ""
        },
        {
            id: "5",
            nome: "Agnys Bueno",
            servico: "Desenvolvedora Full Stack",
            area: "Tecnologia",
            distancia: 6.2,
            nota: "4,2",
            foto: ""
        }
    ])

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput 
                    style={styles.searchInput} 
                    placeholder='Procurar por...'/>
                    <TouchableOpacity>
                        <Text>Filtrar</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    renderItem={({ item }) => {
                        return (
                            <View 
                            style={styles.item}>
                                <Card 
                                name={item.nome} 
                                servico={item.servico}
                                area={item.area}
                                distancia={item.distancia}
                                nota={item.nota}
                                foto={item.foto}
                                navigation={navigation}/>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default Main