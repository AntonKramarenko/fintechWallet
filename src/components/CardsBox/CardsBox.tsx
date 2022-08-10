import React from 'react';
import { IFullCardInfo } from '../../types/interfaces';
import { BalanceItem } from '../ui/BalanceItem';
import './CardsBox.scss';

interface ICardsBox {
	cards: IFullCardInfo[]
}

export const CardsBox:React.FC<ICardsBox> = ({cards}) => {

	console.log(cards);
	const cardsArr = cards.map(item =>{
		<BalanceItem bank={item.bank} canEdit={true} balanceValue={0} balanceCurrency={''} balanceLocal={''}/>;
	});
	
	return (
		<div className='cardsBox'>
			<>
				<div className='cardsBox__title'>Мої картки</div>
				{cardsArr}
				<BalanceItem bank={''} canEdit={true} balanceValue={0} balanceCurrency={''} balanceLocal={''}/>
			</>
		</div>
	);
};


{/* <BalanceItem bank='mono' canEdit={true} balanceValue={0} balanceCurrency={''} balanceLocal={''}/>
			<BalanceItem bank='mono' canEdit={true} balanceValue={0} balanceCurrency={''} balanceLocal={''}/> */}