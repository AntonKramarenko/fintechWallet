import React from 'react';
import { Button } from '../Button';
import {toCurrency} from '../../../helpers/toCurrency';
import './BalanceItem.scss';

interface IBalanceItem{
	balanceValue: number,
	balanceCurrency: string,
	balanceLocal: string
  	bank?:string,
  	canEdit: boolean,
	click?: () => void
}

export const BalanceItem:React.FC<IBalanceItem> = ({bank,canEdit,balanceValue,balanceCurrency, balanceLocal,click}) => {
	
	return (
		<div className='balanceItem'>
			<div className='balanceItem__amount'>
				<span className='balanceItem__styleList'>-</span>
				{bank && <span className='balanceItem__bank'>{bank}</span>}
				<span className='balanceItem__count'>{toCurrency(balanceValue,balanceCurrency)}</span>
			</div>
			{canEdit && <Button styleType='light' type='button' active={true} click={click} title='Peдагувати'/>}
		</div>
	);
};