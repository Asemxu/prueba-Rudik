import React from 'react';
import ProductCarrito from './ProductCarrito';
export default class ListProductsCarrito extends React.Component{
    render(){
        let total = 0;
        return(
            <React.Fragment>
                <ul className="lista_products_carrito">
                    {this.props.products.map((product) => {
                        let price = parseFloat(product.price.amount) * product.cantidad; 
                        total+=price;
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
                    <hr/>
                    <div className="total_costo">
                        <h2>Total : {total.toFixed(2)}</h2>
                    </div>
                </ul>
            </React.Fragment>
        )
    }
}