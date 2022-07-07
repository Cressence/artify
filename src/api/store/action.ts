import { PRODUCT_FAILURE, PRODUCT_SUCCESS } from "./constants";

const URL = process.env.REACT_APP_API_URL;

const getProductDataPromise = async (page: number) => {
	const limit = 12;
	try {
		return fetch(`${URL}/products?limit=${limit}&page=${page}`)
			.then((data) => {
				return new Promise(resolve => {
					resolve(data.json());
				})
					.then(response => {
						return response;
					})
			})
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const getProductData = (page: number) => (dispatch: any) => {
	return getProductDataPromise(page)
		.then((resp) => {
			dispatch({
				type: PRODUCT_SUCCESS,
				data: resp,
			});
		})
		.catch((resp) => {
			console.log("resp error: ", resp);
			dispatch({
				type: PRODUCT_FAILURE,
				data: resp,
			});
		});
};