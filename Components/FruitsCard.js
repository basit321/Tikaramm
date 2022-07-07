import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Cheese } from './GroceryImages'
import { Decrement, Increment, Shoppingcart, ShoppingcartSmall } from './Icons'
import { HStack, VStack } from 'native-base'

export default function FruitsCard(props) {
  const { title, icon,price } = props
  return (
    <View style={{ ...styles.card }}>
      <Image source={icon} style={{ width: 100, height: 100, resizeMode: 'contain' }}  alt="description of image"/>
      <Text style={{ ...styles.fruitTitle }}>{title}</Text>

      <View style={{ ...styles.detailContainer }}>
        <Text style={{ ...styles.fruitQuantity }}>
          1kg
        </Text>
        <Text style={{ ...styles.fruitPrice }}>
          {price}JD
        </Text>
      </View>

      <HStack>

        <View style={{ ...styles.quantityContainer }}>
          <View style={{ ...styles.decrementContainer }}>
            <Decrement />
          </View>
          <View style={{ ...styles.cartQuantity }}>
            <Text style={{ color: '#404852', fontSize: 12 }}>1.5kg</Text>
          </View>
          <View style={{ ...styles.incrementContainer }}>
            <Increment />
          </View>
        </View>

        <View style={{ ...styles.cartContainer }}>
          <ShoppingcartSmall color="#fff" />
        </View>
      </HStack>
    </View>
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
    marginRight: 10,
    padding: 10

  },
  fruitTitle: {
    color: '#374151',
    fontSize: 14,
    fontFamily: 'arabicRegular',
    textAlign: 'left',
    alignSelf: "flex-start"
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
    marginVertical: 5
  },
  fruitQuantity: {
    fontSize: 14,
    fontFamily: 'arabicRegular',
    color: "#A3A3A3"
  },
  fruitPrice: {
    fontSize: 14,
    fontFamily: 'arabicRegular',
    color: "#48B9B0"
  }, quantityContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#979797'
  },
  decrementContainer: {
    borderRightWidth: 1,
    borderColor: '#979797',
    alignItems: 'center',
    justifyContent: "center",
    height: 25,
    width: 25
  },
  incrementContainer: {
    borderLeftWidth: 1,
    borderColor: '#979797',
    alignItems: 'center',
    justifyContent: "center",
    height: 25,
    width: 25
  },
  cartQuantity: {
    justifyContent: "center",
    alignItems: "center",
    width: 40
  },
  cartContainer: {
    backgroundColor: "#48B9B0",
    width: 30,
    height: 30,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  }
})