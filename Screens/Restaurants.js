import { View, Text, StyleSheet, TextInput, FlatList, Dimensions,ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Search } from '../Components/Icons'
import RestaurantCard from '../Components/RestaurantCard'
import { getRestaurants } from '../Data/RestaurantData'
import { RH1 } from '../Components/Logos'
import { getRHImages } from '../Data/RHSlider'

const height = Dimensions.get('window').height;

export default function Restaurants() {
    const data = getRestaurants();
    const rhData = getRHImages()
    return (
        <ScrollView style={{ ...styles.container }}>
            <StatusBar />
            <View style={{ ...styles.searchContainer }}>
                <View style={{ ...styles.searchSubContainer }}>
                    <Search />
                    <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
                </View>
            </View>

            <View style={{ padding: 10 }}>
                <FlatList
                    data={rhData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={item.sty == 'rhall' ? styles.headCardall : styles.headCard}>
                            {item.img}
                            <View style={{ textAlign: 'left' }}>
                                <Text style={item.sty == 'rhall' ? styles.htext : null}>{item.name}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>



            <View style={{ ...styles.cardContainer }}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <RestaurantCard icon={item.img} distance={item.distance} />
                    )}
                />
                <View style={{ height: 50 }}>

                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height
    },
    searchContainer: {
        backgroundColor: '#FF9D52',
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
    },
    headCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    headCardall: {
        backgroundColor: "#fff",
        borderColor: "#FFA34D",
        borderWidth: 1,
        borderRadius: 20,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    htext: {
        color: "#FFA34D",
    }


})