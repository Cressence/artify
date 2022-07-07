export default interface Product {
	id: number
	api_model: string
	api_link: string
	title: string
	external_sku: number
	image_url: string
	web_url: string
	description: string
	price_display: string
	min_compare_at_price: null
	max_compare_at_price: null
	min_current_price: 75
	max_current_price: 75
	artist_ids: any[]
	artwork_ids: any[]
	exhibition_ids: any[]
	last_updated_source: string
	last_updated: string
	timestamp: string

}