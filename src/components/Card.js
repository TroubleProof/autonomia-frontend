import React from 'react';
import { Image, View, Text } from 'react-native'
import styles from '../styles/styles'

const Card = (props) => {
    return (
        <>
            <View style={styles.card}>
                <View style={styles.foto}></View>
                <View>
                    <Text style={{marginTop: 10, marginRight: 50}}>{props.name}</Text>
                    <View style={styles.footerCard}>
                        <Text>{props.servico}</Text>
                    </View>        
                </View>
                <Text style={{marginTop: 10, marginLeft: 15}}>{props.nota}</Text>
                <Text style={{marginTop: 30}}>{props.distancia} Km</Text>
            </View>
            <View style={styles.footerCard}>
                <Text style={{margin: 10, bottom: 10}}>Área: {props.area}</Text>
                <Text style={{margin: 10, bottom: 10}}>Ver Perfil</Text>
            </View>
            
        </>
    )
}

export default Card