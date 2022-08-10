import React from 'react';
import { CardsBox } from '../CardsBox';
import { BalanceItem } from '../ui/BalanceItem';
import './TotalBalance.scss';

interface ITotalBalance{
}

export const TotalBalance:React.FC<ITotalBalance> = () => {
	return (
		<div className='totalBalance'>
			<h3 className='totalBalance__title'>Баланс</h3>
			<BalanceItem canEdit={false}/>
			<BalanceItem canEdit={false}/>
			<div className='totalBalance__cash'>
				<h3 className='totalBalance__subTitle'>Готівка</h3>
				<BalanceItem canEdit={true}/>
			</div>
		</div>
	);
};
