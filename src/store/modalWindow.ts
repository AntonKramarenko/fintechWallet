import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:boolean= false;

export const modalWindowSlice = createSlice({
	name: ' modalWindow',
	initialState,
	reducers: {
		isVisibleModal(state:boolean, action:PayloadAction<boolean>){
			return action.payload;
		}
	}
});

export const { isVisibleModal} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;


// addQuestion(state:IQuestionState[],action:PayloadAction<IQuestionState>){
// 	state.push(action.payload)
// },