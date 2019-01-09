import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class SizeFilter extends React.Component{
	render(){
		return(
		<div>
			Filter By Size
		< /div>
		)
	}
}

class NumProdsNotif extends React.Component{
	render(){
		return(
		<div>
			17 Products Found
		</div>
		)
	}
}

class Cart extends React.Component{
	render(){
		return(
		<div>
			Cart
		</div>
		)
	}
}

class OrderBy extends React.Component{
	render(){
		return(
		<div>
			Order By
		</div>
		)
	}
}

class Products extends React.Component{
	render(){
		return(
		<div>
			Products
		</div>
		)
	}
}



//Everything Contained on this Page
class FullPage extends React.Component{
	render(){
		return (
		<div>
			<SizeFilter />
			<NumProdsNotif />
			<Cart />
			<OrderBy />
			//<Products products={this.props.products} />
			<Products />
		</div>

			);
	}
}



export default FullPage; 
