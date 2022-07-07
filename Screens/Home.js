import { View, Text, StyleSheet, TextInput ,ScrollView} from 'react-native'
import React from 'react'
import { AeroPlane, FastFood, Hotels, Package, Search, SuperMarket } from '../Components/Icons'
import HomeCard from '../Components/HomeCard'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <ScrollView style={{ ...styles.conatainer }}>
      <View style={{ ...styles.searchContainer }}>
        <Search />
        <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
      </View>

      <Slider />

      <View style={{ ...styles.servicesConatainer }}>
        <Text style={{ ...styles.serviceHeading }}>Tikramm Services</Text>
        <Text style={{ ...styles.serviceSubHeading }}>Enjoy our special services</Text>
        <View style={{ ...styles.cardContainer }}>
          <HomeCard bc="#00D6AB" title="Supermarket" wd="48%" icon={<SuperMarket />} screen="supermarket" />
          <HomeCard bc="#FF9D52" title="Restaurants" wd="48%" icon={<FastFood />} screen="restaurants" />
          <HomeCard bc="#700B97" title="Hotels" wd="48%" icon={<Hotels />} screen="Hotels" />
          <HomeCard bc="#3DB2FF" title="Flying Tickets" wd="48%" icon={<AeroPlane />} screen="Flying_ticket" />
          <HomeCard bc="#628395" title="Deliver Anything" wd="100%" icon={<Package />} screen="Delivery" />
        </View>
      </View>

    </ScrollView>
  )
}

export default Home
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#f6f6f6",
    flex:1,
  },
  searchContainer: {
    marginVertical: 5,
    backgroundColor: '#E6E7E9',
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
  servicesConatainer: {
    marginHorizontal: 20,
  },
  serviceHeading: {
    fontSize: 16,
    fontFamily: 'arabicRegular'

  },
  serviceSubHeading: {
    fontSize: 12,
    fontFamily: 'arabicRegular'
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
})