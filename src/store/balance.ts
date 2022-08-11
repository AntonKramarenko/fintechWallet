import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITotalBalance } from '../types/interfaces';

interface IInitialBalance{
	totalBalance: ITotalBalance[],
	cashBalance: ITotalBalance[]
}

const initialState:IInitialBalance = {
	totalBalance: [
		{currency: 'UAH', amount: 0}
	],
	cashBalance: [
		{currency: 'UAH', amount: 0}
	]
};

export const cardBalanceSlice = createSlice({
	name: 'cardBalance',
	initialState,
	reducers: {
		installTotalBalance(state:IInitialBalance,action:PayloadAction<ITotalBalance[]>){
			state.totalBalance = action.payload;
		},
		changeCash(state:IInitialBalance, action:PayloadAction<{currency: string, amount: string}>){
			let isHasAmount = false;
			state.cashBalance.forEach(item => {
				if(item.currency === action.payload.currency) {
					item.amount = +action.payload.amount; 
					isHasAmount = true;
				}
			});

			if(!isHasAmount){
				state.cashBalance.push({currency: action.payload.currency, amount: +action.payload.amount});
			}
		},
		addCash(state:IInitialBalance,action:PayloadAction<{currency: string, amount: string}>){
			let isHasAmount = false;
			state.cashBalance.forEach(item => {
				if(item.currency === action.payload.currency){
					item.amount += +action.payload.amount;
					isHasAmount = true;
				}
			});	

			if(!isHasAmount){
				state.cashBalance.push({currency: action.payload.currency, amount: +action.payload.amount});
			}
		}
	}
});

export const { changeCash,installTotalBalance,addCash} = cardBalanceSlice.actions;
export default cardBalanceSlice.reducer;