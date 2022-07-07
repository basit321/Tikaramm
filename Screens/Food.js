import { View, Text, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home, Map, Search, StarYellow } from '../Components/Icons'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitData'
import { HStack, VStack } from 'native-base'
import FoodMenu from '../Components/FoodMenu'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height;

export default function Foods() {
    const navigation = useNavigation()
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

            <View style={{ ...styles.restaurantContainer }}>
                <Image source={require("../Images/Restaurants/rs3.png")} 
                style={{ width: 100, height: 100, resizeMode: "contain" }} alt="description of image" />
                <View style={{ marginLeft: 10, width: "60%" }}>
                    <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Restaurants Name</Text>
                    <Text style={{ fontSize: 16, color: "#9E9E9E", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>5.3km</Text>
                    <Text style={{ fontSize: 16, color: "#A6A6A6", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>+962 79 999 9999</Text>
                </View>
                <VStack justifyContent="space-between">
                    <HStack alignItem="center">
                        <Text style={{ fontSize: 16, color: "#9E9E9E", fontFamily: "arabicRegular" }}>3.6</Text>
                        <View style={{ marginTop: 12 }}>
                            <StarYellow />
                        </View>
                    </HStack>
                    <Map />

                </VStack>
            </View>
            <View>
                <HStack justifyContent="space-between" alignItems="center" mx='5'>
                    <Text style={{ fontFamily: 'arabicBold', fontSize: 18 }}>Food Menu</Text>
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 16, color: "#009476" }}>See All</Text>
                </HStack>
                <FoodMenu />
            </View>

            <View style={{ ...styles.totalContainer }}>
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantCart")}>
                    <Text style={{ color: "#fff", }}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height
    },
    searchContainer: {
        backgroundColor: '#FF9D52',
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
    restaurantContainer: {
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row"
    },
    totalContainer: {
        position: "absolute",
        bottom: 0,
        zIndex: 2,
        height: 120,
        width: "100%",
        backgroundColor: "#FF9D52",
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: 'row',
        paddingTop: 10
    }

})