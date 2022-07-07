const fruits = [
    {
        id: 2,
        img: require('../Images/Fruits/mint.png'),
        title: "Mint",
        price: "1.20",
        keyword: "all vegetable"
    },
    {
        id: 7,
        img: require('../Images/Fruits/tomato.png'),
        title: "Tomato",
        price: "2.50",
        keyword: "all vegetable"
    },
    {
        id: 8,
        img: require('../Images/Fruits/potato.png'),
        title: "Potato",
        price: "0.99",
        keyword: "all vegetable"
    },
    {
        id: 9,
        img: require('../Images/Fruits/carrot.png'),
        title: "Carrot",
        price: "1.20",
        keyword: "all vegetable"
    },

]
export const getFruits = () => {
    return fruits;
}