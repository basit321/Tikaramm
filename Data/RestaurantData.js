import React from 'react'
import { SM1, SM2, SM3 } from "../Components/Images";
import { Image } from 'react-native'

const restaurants = [
    {
        id: 1,
        img: <Image source={require('../Images/Restaurants/rs1.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />,
        distance: 2.2
    },
    {
        id: 2,
        img: <Image source={require('../Images/Restaurants/rs2.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />,
        distance: 3.0
    },
    {
        id: 3,
        img: <Image source={require('../Images/Restaurants/rs3.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />,
        distance: 5.3
    },
    {
        id: 4,
        img: <Image source={require('../Images/Restaurants/rs4.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />,
        distance: 5.4
    },
    {
        id: 5,
        img: <Image source={require('../Images/Restaurants/rs5.png')} style={{ width: 80, height: 80, resizeMode: 'contain' }} />,
        distance: 20
    },
]
export const getRestaurants = () => {
    return restaurants;
}