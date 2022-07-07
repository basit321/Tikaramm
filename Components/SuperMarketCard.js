import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SM1 } from './Images';
import { ChevronRight, Heart } from './Icons';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SuperMarketCard(props) {
    const { icon, distance } = props
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("grocery")} style={{ ...styles.card }}>
            {icon}
            <View style={{ width: "68%", paddingLeft: 5 }}>
                <Text style={{ ...styles.marketName }}>
                    Supermarket Name
                </Text>
                <Text style={{ ...styles.marketDistance }}>
                    {distance}km
                </Text>
            </View>
            <View style={{ ...styles.icons }}>
                <Heart />
                <ChevronRight />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 7,
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


    },
    marketDistance: {
        fontSize: 16,
        fontFamily: "arabicRegular",
        color: "#9E9E9E"
    },
    marketName: {
        fontSize: 16,
        fontFamily: "arabicRegular",
        color: "#374151"
    },
    icons: {
        height: 90,
        justifyContent: 'space-between',
        padding: 4,
    }
})