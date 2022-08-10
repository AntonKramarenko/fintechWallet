import React from 'react';
import { Button } from '../Button';
import './BalanceItem.scss';

interface IBalanceItem{
  bank?:string,
  canEdit: boolean
}

export const BalanceItem:React.FC<IBalanceItem> = ({bank,canEdit}) => {
	
	return (
		<div className='balanceItem'>
			<div className='balanceItem__amount'>
				<span className='balanceItem__styleList'>-</span>
				{bank && <span className='balanceItem__bank'>{bank}</span>}
				<span className='balanceItem__count'>500</span>
				<span className='balanceItem__currency'>USD</span>
			</div>
			{canEdit && <Button styleType='light' type='button' active={true} click={console.log} title='Peдагувати'/>}
		</div>
	);
};