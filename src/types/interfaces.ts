export interface ITotalBalance {
	currency: string,
	value: number,
	locales: string
}

export interface IAddCardInput  {
    cardNumber: string,
    expDate: string,
    cw: string,
    cardHolder: string,
    amount: string,
    currency: string,
};

export interface IFullCardInfo{
	cardNumber: string,
	expDate:string,
	cw:string,
	cardHolder:string,
	currency:string,
	amount:string,
	bank?: string,
	scheme?:string,
	type?:string
}