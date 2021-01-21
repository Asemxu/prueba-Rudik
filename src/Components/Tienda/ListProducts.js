import React from 'react';
import Product from './Product';
export default class ListProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : props.products
        }
    }
    render(){
    
        return(
            <React.Fragment>
                <ul className="lista_products">
                    {this.state.products.map((product) => {
                        return(
                            <li key={product.id}>
                                <Product
                                addCart={this.props.addCart}
                                info={product}
                                />
                                <br/>
                            </li>                      
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}