import React from 'react';
import { CreditCard } from '../../components/CreditCard';
import { Button } from '../../components/ui/Button';
import './Wallet.scss';

export const Wallet = () => {
	return (
		<div className='wallet'>
			<div className='wallet__btns'>
				<Button type='submit' active={true} click={console.log} styleType='succes' title='Додати карту' />
				<Button type='submit' active={true} click={console.log} styleType='succes' title='Додати готівку'/>
			</div>
			<CreditCard/>
			<CreditCard/>
		</div>
	);
};
