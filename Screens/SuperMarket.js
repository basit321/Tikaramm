import { View, Text, StyleSheet, TextInput, FlatList, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Search } from '../Components/Icons'
import SuperMarketCard from '../Components/SuperMarketCard'
import { getMarkets } from '../Data/SuperMarketData'

const height = Dimensions.get('window').height;

export default function SuperMarket() {
    const data = getMarkets()
    return (
        <ScrollView style={{ ...styles.container }}>
            <StatusBar />
            <View style={{ ...styles.searchContainer }}>
                <View style={{ ...styles.searchSubContainer }}>
                    <Search />
                    <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
                </View>
            </View>
            <View style={{ ...styles.cardContainer }}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <SuperMarketCard icon={item.img} distance={item.distance} />
                    )}
                />
                <View style={{ height: 50 }}>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height
    },
    searchContainer: {
        backgroundColor: '#00CBA4',
        paddingBottom: 15
    },
    searchSubContainer: {
        marginVertical: 5,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: "row"
    },
    searchInput: {
        height: 40,
        width: "100%",
        paddingLeft: 5
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})