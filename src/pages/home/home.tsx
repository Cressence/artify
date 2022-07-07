import React, { useEffect } from 'react';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

import { RootState } from "./../../api/store/root-reducer";
import { getProductData } from "./../../api/store/action";

// Components
import ProductCard from "../../components/product/product";
import Product from './../../api/models/product';

const Home = () => {
	const dispatch: Dispatch<any> = useDispatch();

	const { productsInfo, appError } = useSelector((state: RootState) => ({
		productsInfo: state.ProductInfo,
		appError: state.ProductInfo.appError
	}));

	useEffect(() => {
		dispatch(getProductData(1));
	}, [dispatch])

	const products: Product[] = productsInfo.productData;

	return (
		<div>
			<h1>ARTIFY</h1>
			<p>Your favorite shop</p>
			<div className="grid-container">
				{
					products &&
					products.map((prod: Product) => {
						return <ProductCard key={prod.id} data={prod} />
					})
				}

			</div>
		</div>
	)
}

export default Home