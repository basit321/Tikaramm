import { RH1, RH2, RH3, RH4 } from '../Components/Logos';
import React from 'react';
const Images = [
    {
        id: 7,
        img: <RH1 />,
        name: "All",
        sty: "rhall"
    },
    {
        id: 8,
        img: <RH2 />,
        name: "Free Delivery",
        sty: "rh"
    },
    {
        id: 9,
        img: <RH3 />,
        name: "Shahwerma",
        sty: "rh"
    },
    {
        id: 10,
        img: <RH4 />,
        name: "Healthy Food",
        sty: "rh"
    }
]
export const getRHImages = () => {
    return Images;
}