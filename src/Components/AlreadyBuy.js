import React, { Component } from 'react'


class AlreadyBuy extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    createPrice = (index) => {
        var c = "";
        while (index > 999) {


            var b = index % 1000;

            //   b.toString();
            if (b === 0) b = "000";
            else if (b < 100) b = "0" + b;
            else if (b < 10) b = "00" + b;
            c = "." + b + c;
            index /= 1000;
            index = index >> 0;
        }
        return index + c;
    }


    deleteCart = (index) => {
        // eslint-disable-next-line no-unused-vars
        this.props.onDelete(index);
    }

    onChange = (even, id) => {
        // console.log(even.target.value);
        // set lai so luong mua cua hang hien tai.

        this.props.changeQuantity(id, +even.target.value);
    }

    render() {
        // console.log(this.props.cart);
        var { cart } = this.props;
        var tong = 0;
        if(cart)
        cart.forEach((element) => {

            tong = tong + element.product.Price * element.soLuong;
        });

        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Picture</th>
                            <th>Số Lượng </th>
                            <th> Price</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((value, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.product.Name}</td>
                                    <td ><img alt="i" height="100px" src={value.product.source}></img> </td>
                                    <td><input min="1" type="number" onChange={(event) => this.onChange(event, value.product.id)} value={value.soLuong} /></td>
                                    <td>{this.createPrice(value.product.Price)} VNĐ</td>
                                    <td>{this.createPrice(value.product.Price * value.soLuong)} VNĐ</td>
                                    <td>
                                        <button onClick={() => this.deleteCart(value.product)}>Delete</button>
                                    </td>
                                </tr>


                            )
                        })}


                        <tr key={-1}>
                            <td>Tổng tiền </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{this.createPrice(tong)} VNĐ</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default AlreadyBuy
