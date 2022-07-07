import React, { useEffect, useState } from 'react';
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

	const [currentPage, setCurrentPage] = useState(1);
	const [isMounted, setIsMounted] = useState(false);

	const { productsInfo, appError } = useSelector((state: RootState) => ({
		productsInfo: state.ProductInfo,
		appError: state.ProductInfo.appError
	}));

	useEffect(() => {
		if (!isMounted) {
			dispatch(getProductData(currentPage));

			setIsMounted(true);
		}
	}, [dispatch, currentPage])

	const loadMoreOnClick = () => {
		setCurrentPage(currentPage + 1);
		dispatch(getProductData(currentPage + 1));
	}

	const products: Product[] = productsInfo.productData;

	return (
		<div>
			<h1>ARTIFY</h1>
			<p>Your favorite shop</p>
			<div className="grid-container">
				{
					products.length > 0 &&
					products.map((prod: Product) => {
						return <ProductCard key={prod.id} data={prod} />
					})
				}
			</div>
			{
				products.length > 0 &&
				<div className="load-more-btn-section">
					<button onClick={loadMoreOnClick} className="load-more-btn">Load More</button>
				</div>
			}

		</div>
	)
}

export default Home