import React from 'react';
import './styles.css';
import data from '../../Database/products.json';
import ListProducts from './ListProducts';
import imgCart from '../../images/add.svg';
import ListProductsCarrito from './ListProductsCarrito';
export default class Tienda extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productos:data.products,
            myProducts:[],
            openCarrito: false
        }
    }

    hideorShow = () =>{
        let carrito_container = document.querySelector(".lista_carrito_container");
        let close  = document.querySelector(".close");
        let lista_productos_carrito = document.querySelector(".lista_products_carrito");
        if(this.state.openCarrito){
            this.hideCarrito(carrito_container,close,lista_productos_carrito);
        }else{
            this.showCarrito(carrito_container,close,lista_productos_carrito);
        }
    }

    addCart = (data) =>{
        let products = this.state.myProducts;
        products.push(data);
      this.setState({myProducts:products});
    }

    hideCarrito = (carrito_container,close,lista_productos_carrito) =>{
        carrito_container.classList.remove('show');
        close.classList.remove("show_close");
        lista_productos_carrito.style.display = "none";
        this.setState({openCarrito:false}); 
    }

    showCarrito = (carrito_container,close,lista_productos_carrito) =>{
        carrito_container.classList.add('show');
        close.classList.add("show_close");
        lista_productos_carrito.style.display = "block";
        this.setState({openCarrito:true});
    }

    deleteMyProduct  = e =>{
        let id = e.target.getAttribute('data');
        id = parseInt(id);
        let newProducts = this.state.myProducts.filter(item => item.id !== id);
        this.setState({myProducts:newProducts});
    }
    render(){
        return(
            <React.Fragment>
                <div className="tienda__container">
                    <ListProducts products={this.state.productos} addCart={this.addCart} />
                </div>
                <div className="lista_carrito_container">
                    <div className="lista_carrito_title">
                        <h2>Kosarica</h2>
                        <div className="close" onClick={this.hideorShow}>
                            x
                        </div>
                    </div>
                    <div className="lista_carrito-body">
                        <ListProductsCarrito deleteProduct={this.deleteMyProduct} products={this.state.myProducts} />
                    </div>
                </div>
                <div className="carrito_img">
                    <img src={imgCart} onClick={this.hideorShow} alt="imagen del carrito de Compras"/>
                </div>
            </React.Fragment>
            
        )
    }
}