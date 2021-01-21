import React from 'react';
import ProductCarrito from './ProductCarrito';
export default class ListProductsCarrito extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <ul className="lista_products_carrito">
                    {this.props.products.map((product) => {
                        return(
                            <li key={product.id}>
                                <ProductCarrito
                                deleteProduct={this.props.deleteProduct}
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