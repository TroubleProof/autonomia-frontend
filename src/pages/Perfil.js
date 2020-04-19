import React from 'react';
import { Image, View, Text, TouchableOpacity, TextInput  } from 'react-native'
import styles from '../styles/styles'

const Perfil = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder='Procurar por...'/>
                <TouchableOpacity>
                    <Text>Filtrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.perfil}>

            </View>
        </View>
    )
}

export default Perfil