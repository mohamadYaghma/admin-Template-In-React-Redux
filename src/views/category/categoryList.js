import React, { Component } from "react";
import { connect } from 'react-redux';
import {categoryFetchRequest } from 'state-management-saga/action/categoryAction';
import { productFetchRequest } from 'state-management-saga/action/productAction';
 
class CategoryList extends Component {
    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchProducts();
      }


    render(){
        return(
            <div>
                <h1>CategoresList</h1>
                {this.props.isLoading ? <div>data is loading...</div> : null} 
                {this.props.message ? <div>error message : {this.props.message}</div> : null}
                <ul>
                    {
                        this.props.categories.map(item => <li key={item.categoryId}><a className="btn btn-outline-secondary m-1">
                        {item.categoryName}
                      </a></li>)
                    }
                </ul>

                <hr/>

                <h2>products List</h2>

                {
                 this.props.mahsolat.map( itemm => <p key={itemm.productId} > {itemm.productName} </p> )
                }
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        categories :  state.CategoryState.items,
        isLoading:    state.CategoryState.isLoading,
        message:      state.CategoryState.message,
        mahsolat:     state.ProductState.items
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCategories : ()=> dispatch(categoryFetchRequest()),
        fetchProducts : ()=> dispatch(productFetchRequest()),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CategoryList);