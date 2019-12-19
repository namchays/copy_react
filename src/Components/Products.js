import React, { Component } from 'react'
import ProductItems from './ProductItems';
import {connect} from 'react-redux';
import { log } from 'util';
class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
 
    render() {
        console.log(this.props.todos);
        var productss = this.props.listproduct;
        return (
            <div>
                {
                    productss.map((value, index) => {
                        return (<ProductItems key={index} item={value} addToCart={this.props.addToCart} />)
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        todos : state.task
    }

}

export default connect(mapStateToProps,null) (Products)
