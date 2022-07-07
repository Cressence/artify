import { PRODUCT_FAILURE, PRODUCT_SUCCESS } from "./constants";
import Product from "./../models/product";

const initialState: any = {
	productData: null,
	appError: null
};

const ProductInfo = (state = initialState, action: any) => {
	switch (action.type) {
		case PRODUCT_SUCCESS: {
			if (action.data) {
				const products: Product[] = action.data.data;

				return {
					...state,
					productData: products,
				};
			} else {
				return {
					...state,
					appError: action.data.detail
				};
			}
		}
		case PRODUCT_FAILURE: {
			return {
				...state,
				productData: null,
				appError: 'Ops! could not get product data at the moment...'
			}
		}
		default:
			return state;
	}
}

export default ProductInfo;