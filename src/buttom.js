import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Button = (props) => {
    return(
        <View style={styles.button}>
            <Text style={styles.text}>Кнопка</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#bbb',
    },
    text:{
        color: '#3949ab',
        fontSize: 40,
        marginTop: 20
    }
});