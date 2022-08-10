import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState:any = [];

export const cardBalanceSlice = createSlice({
	name: 'cardBalance',
	initialState,
	reducers: {
		addbalance(state:any, action:PayloadAction){
			console.log(1);
            
		}
	}
});

export const { addbalance} = cardBalanceSlice.actions;
export default cardBalanceSlice.reducer;


// addQuestion(state:IQuestionState[],action:PayloadAction<IQuestionState>){
// 	state.push(action.payload)
// },