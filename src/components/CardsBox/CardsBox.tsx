import React from 'react';
import { BalanceItem } from '../ui/BalanceItem';
import './CardsBox.scss';

export const CardsBox = () => {
	return (
		<div className='cardsBox'>
			<div className='cardsBox__title'>Мої картки</div>
			<BalanceItem bank='mono' canEdit={true}/>
			<BalanceItem bank='mono' canEdit={true}/>
		</div>
	);
};
