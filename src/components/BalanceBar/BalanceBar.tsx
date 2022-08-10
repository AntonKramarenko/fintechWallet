import React from 'react';
import { useEffect } from 'react';
import { Type } from 'typescript';
import { useAppDispatch, useAppSelector } from '../../store';
import { CardsBox } from '../CardsBox';
import { TotalBalance } from '../TotalBalance';
import './BalanceBar.scss';

interface IBalanceBar{

}

export const BalanceBar:React.FC<IBalanceBar> = () => {
	const state = useAppSelector(state => state);
	const dispatch = useAppDispatch();


	
	return (
		<div className='balanceBar'>
			<TotalBalance/>
			<CardsBox cards={state.cards}/>
		</div>
	);
};