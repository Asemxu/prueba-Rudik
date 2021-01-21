import React from 'react';

export default class Product extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            product : props.info
        }
    }
    render(){
        return(
            <div className="card_product">
                <div className="card_product-header">
                    <img src={this.state.product.image} className="img-fluid" alt={this.state.product.name}/>
                </div>
                <div className="card_product-body">
                    <h6>{this.state.product.name}</h6>
                    <div className="card_product-body-desc">
                        <div className="desc-price">
                            {this.state.product.price.amount}
                        </div>
                        <div className="desc-costo">
                            {this.state.product.price.currency}
                            <br/>
                            {this.state.product.price.measureUnit}
                        </div>
                    </div>
                </div>
                <div className="card_product-footer">
                    <button type="button" onClick={this.props.addCart.bind(this,this.state.product)} className="btn btn-success">Añadir al Carrito</button>
                </div>
            </div>
        )
    }
}