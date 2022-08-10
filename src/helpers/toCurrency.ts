

export const toCurrency = (price:number,currency:string ) => {


	console.log(currency,'UAH');

	
	return new Intl.NumberFormat('ua-UA', {
		style: 'currency',
		currency: 'UAH'
	}).format(price);
};