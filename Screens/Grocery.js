import { View, Text, StyleSheet, TextInput, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home, Search } from '../Components/Icons'
import GroceryCard from '../Components/GroceryCard'
import { getGrocery } from '../Data/groceryData'

const height = Dimensions.get('window').height;

export default function Grocery() {
    const data = getGrocery()
    return (
        <View style={{ ...styles.container }}>
            <StatusBar auto />
            <View style={{ ...styles.searchContainer }}>
                <Home />
                <View style={{ ...styles.searchSubContainer }}>
                    <Search />
                    <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
                </View>
            </View>
            <View style={{ ...styles.cardContainer }}>
                <FlatList
                    numColumns={2}
                    data={data}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <GroceryCard title={item.title} icon={item.img} />
                    )}
                />

                <View style={{ height: 100 }}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        flex:1,
        marginBottom:"20%"
    },
    searchContainer: {
        backgroundColor: '#00CBA4',
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    searchSubContainer: {
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 20,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: "row"
    },
    searchInput: {
        height: 40,
        width: "90%",
        paddingLeft: 5
    },
    cardContainer: {
        padding: 10
    }
})