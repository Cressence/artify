import React from "react";

import "./style.scss";

import Product from './../../api/models/product';

interface ProductCardProps {
	data: Product;
}

const ProductCard = (prodData: ProductCardProps) => {
	const product = prodData.data;
	return (
		<div className="product-card-container">
			<img
				src={product.image_url}
				alt={product.title}
				height={300}
				width={'100%'}
			/>
			<div className="info-section">
				<h3>{product.title}</h3>
				<div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />
				<div className="price-section" dangerouslySetInnerHTML={{ __html: product.price_display }} />
			</div>
		</div>
	)
}

export default ProductCard