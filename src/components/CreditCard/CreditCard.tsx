import React from 'react';
import './CreditCard.scss';

export const CreditCard = () => {

	return (
		<div className='creditCard'>
			<span className='creditCard__bank'>MONO</span>
			<div className='creditCard__info'>
				<div className='creditCard__paymentSystem'>Visa</div>
				<div className='creditCard__cardType'>Debit</div>
			</div>
			<span className='creditCard__amount'>1000 UAH</span>
			<span className='creditCard__cardNumber'>
                1234 1234 1234 1234 
				<span className='creditCard__copyNumber'> copy</span>
			</span>
			<span className='creditCard__expDate'>21/01</span>
		</div>
	);
};
