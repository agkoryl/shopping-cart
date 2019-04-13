import React from 'react';
import { connect } from 'react-redux';

import { addNewItem } from './store/actions';

const products = [
    {
        name: "Lettuce",
        price: 2,
        id: "fvgbtrg"
    },
    {
        name: "Tomato",
        price: 10,
        id: "fvfrdfedfcsrg"
    },
    {
        name: "Apple",
        price: 5,
        id: "fwedfcdscrg"
    },
    {
        name: "Carrot",
        price: 4,
        id: "fv54t45erfrg"
    },
    {
        name: "Orange",
        price: 6,
        id: "e3278rfyhre"
    },
    {
        name: "Plum",
        price: 2,
        id: "478rfyheujf"
    }
]



class Product extends React.Component {


    handleClick(item) {
        this.props.addItem(item)
    }

    render() {
        return (
            <tbody>
                {products.map(prod => {
                    return <tr key={prod.id}><td>{prod.name}</td><td>{prod.price} zł</td>
                        <button type="button" onClick={()=> this.handleClick({name: prod.name, price: prod.price})}>Add</button></tr>
                }
                )}
            </tbody>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: (newItem) => dispatch(addNewItem(newItem))
})


export default connect(null, mapDispatchToProps)(Product);