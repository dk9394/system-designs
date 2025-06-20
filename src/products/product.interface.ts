export interface IReview {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

export interface IMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}

export interface IProduct {
	id: string;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: IReview[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: IMeta;
	thumbnail: string;
	images: string[];
}

export interface IProductResponse {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}
