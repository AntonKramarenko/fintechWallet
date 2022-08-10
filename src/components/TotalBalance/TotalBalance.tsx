import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import { ITotalBalance } from '../../types/interfaces';
import { CardsBox } from '../CardsBox';
import { BalanceItem } from '../ui/BalanceItem';
import './TotalBalance.scss';

interface ITotalBalanceProp{
}

export const TotalBalance:React.FC<ITotalBalanceProp> = () => {
	const balance = useAppSelector(state => state.balance);
	const dispatch = useAppDispatch();

	const editCashHandler =()=>{
		dispatch(isVisibleModal(true));
	};
	
	return (
		<div className='totalBalance'>
			<h3 className='totalBalance__title'>Баланс</h3>
			{balance.totalBalance.map((item:ITotalBalance) => 
				<BalanceItem 
					key={item.currency}
					canEdit={false}
					balanceValue={item.value}
					balanceCurrency={item.currency} 
					balanceLocal={item.locales}			
				/>)}
			<div className='totalBalance__cash'>
				<h3 className='totalBalance__subTitle'>Готівка</h3>
				{balance.cashBalance.map((item:ITotalBalance) => 
					<BalanceItem 
						key={item.currency}
						canEdit={true}
						balanceValue={item.value}
						balanceCurrency={item.currency} 
						balanceLocal={item.locales}	
						click={editCashHandler}			
					/>)}
			</div>
		</div>
	);
};
