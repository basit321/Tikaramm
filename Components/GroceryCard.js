import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Cheese } from './GroceryImages'
import { useNavigation } from '@react-navigation/native'

export default function GroceryCard(props) {
    const { title, icon } = props
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("fruits")} style={{ ...styles.card }}>
            <Image source={icon} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
            <Text style={{ ...styles.groceryTitle }}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 7,
        backgroundColor: '#fff',
        paddingBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        width: "48%",
        marginRight: 10

    },
    groceryTitle: {
        color: '#374151',
        fontSize: 16,
        fontFamily: 'arabicRegular'
    }
})