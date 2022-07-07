import { View, Text, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home, Search } from '../Components/Icons'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitData'

const height = Dimensions.get('window').height;

export default function Fruits() {
    const data = getFruits()
    const [cat, setCat] = useState("all")
    const [fdata, setFdata] = useState(data)

    useEffect(() => {
        const dat1 = data.filter((val) =>
            val.keyword.toLowerCase().includes(cat.toLowerCase())
        )
        setFdata(dat1)
    }, [cat])

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

            <View style={{ ...styles.categoryContainer }}>
                <TouchableOpacity onPress={() => setCat("all")} style={cat === 'all' ? styles.active : styles.nActive} >
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCat("fruit")} style={cat === "fruit" ? styles.active : styles.nActive}>
                    <Text>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCat("veg")} style={cat === "veg" ? styles.active : styles.nActive}>
                    <Text>Vegetables</Text>
                </TouchableOpacity>
            </View>

            <View style={{ ...styles.cardContainer }}>

                <FlatList
                    numColumns={2}
                    data={fdata}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <FruitsCard title={item.title} icon={item.img} price={item.price} />
                    )}
                />

                <View style={{ height: 100 }}>

                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        flex:1,
        marginBottom:"30%"
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
    },
    categoryContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 10
    },
    active: {
        borderWidth: 1,
        borderColor: "#FA9755",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    nActive: {
        backgroundColor: "#E4E4E4",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
})