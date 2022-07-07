import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeCard = (props) => {
    const navigation = useNavigation()
    const { bc, title, wd, icon, screen } = props
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)} style={{ ...styles.card, borderColor: bc, width: wd }}>
            {icon}
            <Text style={{ ...styles.cardTitle }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderRadius: 10,
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        marginVertical: 10
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: 'arabicRegular'
    }
})

export default HomeCard