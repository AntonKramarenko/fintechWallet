import React from 'react';
import { CardsBox } from '../CardsBox';
import { TotalBalance } from '../TotalBalance';
import './BalanceBar.scss';

interface IBalanceBar{

}

export const BalanceBar:React.FC<IBalanceBar> = () => {
	return (
		<div className='balanceBar'>
			<TotalBalance/>
			<CardsBox/>
		</div>
	);
};