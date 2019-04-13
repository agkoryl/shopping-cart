import React from 'react';


const products = [
    {
        name: "Lettuce",
        price: 2
    },
    {
        name: "Tomato",
        price: 10
    },
    {
        name: "Apple",
        price: 5
    },
    {
        name: "Carrot",
        price: 4
    },
    {
        name: "Orange",
        price: 6
    },
    {
        name: "Plum",
        price: 2
    }
]



class Product extends React.Component {


    render() {
        return (
            <tbody>
                {products.map(prod => { 
                    return <tr><td>{prod.name}</td><td>{prod.price} zł</td><button type="button">Add</button></tr> 
                }
                )}
            </tbody>
        )
    }
}


export default Product;