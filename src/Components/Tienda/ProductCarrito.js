import React from 'react';

export default class ProductCarrito extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            product : props.info
        }
    }
    render(){
        return(
            <React.Fragment>
                <img src={this.state.product.image} alt={this.state.product.name}/>
                <div className="desc">
                    <h6>{this.state.product.name}</h6>
                    <h6>Total: {this.state.product.price.amount}</h6>
                </div>
                <div className="delete_product" onClick={this.props.deleteProduct} data={this.state.product.id}>
                    x
                </div>
            </React.Fragment>
        )
    }
}