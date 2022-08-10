import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITotalBalance } from '../types/interfaces';

interface IInitialBalance{
	totalBalance: ITotalBalance[],
	cashBalance: ITotalBalance[]
}

const initialState:IInitialBalance = {
	totalBalance: [
		{currency: 'UAH', value: 0, locales: 'ua-UA'}
	],
	cashBalance: [
		{currency: 'UAH', value: 0, locales: 'ua-UA'}
	]
};

export const cardBalanceSlice = createSlice({
	name: 'cardBalance',
	initialState,
	reducers: {
		changeCash(state:IInitialBalance, action:PayloadAction<{currency: string, amount: string}>){
			state.cashBalance.map(item => {
				if(item.currency === action.payload.currency) item.value = +action.payload.amount; 
				return item;
			});
		}
	}
});

export const { changeCash} = cardBalanceSlice.actions;
export default cardBalanceSlice.reducer;