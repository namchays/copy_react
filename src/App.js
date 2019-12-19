import React, { Component } from 'react'

import Products from './Components/Products'

import AlreadyBuy from './Components/AlreadyBuy'

import redux from './Trainning/Redux'
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listproduct: [
                {
                    id: 1,
                    Name: "Iphone 5",
                    source: "https://images-na.ssl-images-amazon.com/images/I/71oip7WhHiL._SX569_.jpg",
                    Price: 6999999,
                    status: false
                },
                {
                    id: 2,
                    Name: "Iphone 6",
                    source: "https://ae01.alicdn.com/kf/HTB1k4oiAwaTBuNjSszfq6xgfpXar/Unlocked-Apple-iPhone-6s-2GB-RAM-16-64-128GB-ROM-Cell-Phone-IOS-A9-Dual-Core.jpg",
                    Price: 11000000,
                    status: false
                },
                {
                    id: 3,
                    Name: "Iphone 7",
                    source: "https://switch.com.my/wp-content/uploads/2017/11/iPhone7-Black-2Up-34L-US-EN-SCREEN.jpg",
                    Price: 26999999,
                    status: false
                },
                {
                    id: 4,
                    Name: "Iphone 8",
                    source: "./a.jpg",
                    Price: 59999999,
                    status: false
                },
                {
                    id: 5,
                    Name: "Iphone X",
                    source: "./iphonex.png",
                    Price: 60000000,
                    status: false
                },
                {
                    id: 6,
                    Name: "Iphone 3",
                    source: "https://cdn.thegioididong.com/Products/Images/42/22230/iPhone-3GS-8GB-1.jpg",
                    Price: 299999,
                    status: false
                },

            ],
            cart: [
                // {
                //     soLuong: 2,
                //     product: {
                //         id: 1,
                //         Name: "Iphone 5",
                //         source: "https://images-na.ssl-images-amazon.com/images/I/71oip7WhHiL._SX569_.jpg",
                //         Price: 6000000,
                //         status: false
                //     }
                // }
            ],
            phone: [
                { kind: 0 }
            ],
            
           
        }
    }



    // componentWillMount(){
    //     var cart = localStorage.getItem('cart') ? localStorage.getItem('cart') : console.log('sdad');
    //     if(cart.length){
    //         this.setState({
    //             cart: cart
    //         })
    //     }else{
    //         console.log('Nul');
    //     }

    setLocalstorage= ()=>{
    //     var {cart}= this.state;
    //  //  localStorage.setItem('cart', JSON.stringify(cart));
    //     localStorage.setItem('x');
    //     localStorage.x=cart;
    //     // localStorage.cart= cart;
    //     console.log(localStorage.c);
      
       
    }
    Deletecart = () => {
        // console.log(this.state.cart);

        var { cart } = this.state;
        cart = [];
        this.setState({
            cart: cart
        })

    }

    changeQuantity = (id, soluong) => {
        var { cart } = this.state;

        cart.forEach((value) => {
            if (value.product.id === id) {
                value.soLuong = soluong
            }
        });

        this.setState({
            cart: cart
        })
    }

    
   
    addToCart = (product) => {
        var { cart } = this.state;
        var kt = false;
        cart.forEach((value) => {
            if (value.product.id === product.id) {
                value.soLuong++;
                kt = true;
            }
        });
        if (kt === false) {
            cart = [...cart, {
                soLuong: 1,
                product: product
            }];
        }

        this.setState({
            cart: cart
        })
      
    }
    buy = () => {

        // eslint-disable-next-line no-restricted-globals
        if (confirm('Bạn có muốn mua tất cả '))
            this.Deletecart();
    }

    Filter = () => {
        var a = this.state.phone;
  
        if (a[0].kind === 0)

            return (<Products addToCart={this.addToCart} listproduct={this.state.listproduct} />)

        if (a[0].kind === 1) {
            var d = this.state.listproduct;
            d = d.filter((x) => {
                return x.Price <= 5000000;
            }
            )
            return (<Products addToCart={this.addToCart} listproduct={d}/>)
        }
        if (a[0].kind === 2) {
            var e = this.state.listproduct;
            e = e.filter((x) => {
                return 5000000 < x.Price < 8000000;
            }
            )
            
            return (
          
            <Products addToCart={this.addToCart} listproduct={e} createPrice= {this.state.createPrice}/>
                  
                )
        }
        if (a[0].kind === 3) {
            var f = this.state.listproduct;
            f = f.filter((x) => {
                return x.Price >= 8000000;
            }
            )
            return (<Products addToCart={this.addToCart} listproduct={f} />)
        }

    }
    changeProperty = (text) => {
        var { phone } = this.state;
        if (text === "1") { phone[0].kind = 1 }
        if (text === "2") { phone[0].kind = 2 }
        if (text === "3") { phone[0].kind = 3 }

    }



    acept = () => {
        var { cart } = this.state;
      //  localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({
            cart: cart
        })
      
  
        
    }

    onDelete = (index) => {
        
        var cart = this.state.cart;
   
        var listCart = [];
        listCart = cart.filter(x => x.product.id !== index.id);
 
        this.setState({
            cart: listCart
        });
    }
 
    render() {
        return (
            <Router>
            
            <div>
                  <nav className="navbar navbar-inverse">
             
             <ul className="nav navbar-nav">
             <li>
                 <Link to="/all">home</Link>
                 </li>
                <li>
                 <Link to="/about">Giỏ hàng</Link>
                 </li>
             </ul>
        </nav>
        
            
                <Switch>
              
           <Route>
                <li>Filter by price of Phone</li>
                <div className="row">
                    <div className="col-lg-3">
                        <button type="button" className="form-control" onClick={() => this.changeProperty("1")}> {"<=5.000.000"}</button>
                        <button type="button" className="form-control" onClick={() => this.changeProperty("2")}>{"Từ 5.000.000 -> 8.000.000"}</button>
                        <button type="button" className="form-control" onClick={() => this.changeProperty("3")}>8.000.000 Trở lên </button>
                        <button onClick={() => this.acept()}>accept</button>
                    </div>
                    <div className="col-lg-9">
                        {this.Filter()}
                   
                    </div>
                </div>


                </Route>
           <Route path="/about">
      

           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button className="btn btn-primary" onClick={() => this.Deletecart()}>xóa giỏ hàng</button>
        <button className="btn btn-primary" onClick={() => this.buy()}>Mua toàn bộ hàng </button>
    </div>
    <AlreadyBuy cart={this.state.cart} changeQuantity={this.changeQuantity} onDelete={this.onDelete}/>
    {this.setLocalstorage()}
           
    </Route>
    
    </Switch>
            </div>
          
            </Router>
        )
    }
}


export default App
