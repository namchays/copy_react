import React, { Component } from 'react'


class ProductItems extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    onClick = (e, item) => {
        e.preventDefault();
        
        this.props.addToCart(item);
        alert("Mua thành công: "+item.Name+"-"+ this.createPrice(item.Price));
    }
    createPrice=(index)=>{
        var c="";
        while(index>999){
            
            
            var b= index%1000;
    
         //   b.toString();
            if(b===0)	b="000";
            else if(b<100) b="0"+b;
            else if(b<10) b="00"+b;
            c="."+b+c;
            index/=1000;
            index= index >> 0;
        }
        return index+c;
    }
    
    render() {
        var item = this.props.item;
       
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img alt="iphone" src={item.source} />
                        <div className="caption">
                            <h3>{(item.Name)}</h3>
                            <p>
                                {this.createPrice(item.Price)} VNĐ
                            </p>
                            <p>
                                <a className="btn btn-primary" href=" ">Mua hàng</a>
                                <a className="btn btn-default" href=" " onClick={(event) => this.onClick(event,item)} >Thêm vào giỏ hàng</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItems
