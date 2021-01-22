import React from 'react';
import './styles.css';
import data from '../../Database/products.json';
import ListProducts from './ListProducts';
import imgCart from '../../images/add.svg';
import ListProductsCarrito from './ListProductsCarrito';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Tienda extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productos:data.products,
            myProducts: JSON.parse(localStorage.getItem('myProducts')) || [],
            openCarrito: false,
            lastProductSelected:null
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
        if(data.cantidad === undefined){
            data.cantidad = 1;
            this.setState({lastProductSelected:data});
            products.push(data);
            localStorage.setItem('myProducts',JSON.stringify(products));
        }else{
            if(this.state.lastProductSelected.id === data.id){
                for(let i = 0 ;i < this.state.myProducts.length; i++){
                    if(this.state.myProducts[i].id === data.id){
                        data.cantidad++;
                        products[i] = data;
                        break;
                    }
                }
            }
            
        }
        
        this.setState({myProducts:products});
        toast.success('🛍 Añadido al Carrito de Compras!' , {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
        let productos = this.state.productos;
        let newProducts = this.state.myProducts.filter(item => item.id !== id);
        for(let i = 0 ;i < productos.length; i++){
            if(productos[i].id === id){
                // productos[i].cantidad = undefined;
                delete productos[i]['cantidad'];
                delete productos.cantidad;
                break;
            }
        }
        if(this.state.lastProductSelected !== null){
            if(this.state.lastProductSelected.id === id){
                this.setState({
                    lastProductSelected :{
                        ...this.state.lastProductSelected,
                        cantidad : 0
                    }
                })

            }
        }

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
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </React.Fragment>
            
        )
    }
}