import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddCardInput, IFullCardInfo } from '../types/interfaces';



const initialState:IFullCardInfo[] = [
	{amount: '1111',
		bank: 'HIPERCARD',
		cardHolder: '12',
		cardNumber: '6062828888666688',
		currency: 'UAH',
		cw: '122',
		expDate: '1221',
		scheme: 'mastercard',
		type: 'debit'}
];

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		addCard(state:IFullCardInfo[], action:PayloadAction<IFullCardInfo>){
			state.push(action.payload);
		}
	}
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
