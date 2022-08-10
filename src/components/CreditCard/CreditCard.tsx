import React, { useState } from 'react';
import { toCurrency } from '../../helpers/toCurrency';
import './CreditCard.scss';

interface ICreditCard{
	bank?: string | undefined,
	scheme?:string | undefined,
	type?:string | undefined,
	amount: string,
	currency: string,
	cardNumber:string,
	expDate: string
}

export const CreditCard: React.FC<ICreditCard> = ({bank,scheme,type,amount,cardNumber,expDate,currency}) => {
	const [ isCopy, setIsCopy ] = useState(false);

	const clickCopyHandler = () =>{
		navigator.clipboard.writeText(cardNumber);
		setIsCopy(true);
	};

	return (
		<div className='creditCard'>
			{bank && <span className='creditCard__bank'>{bank}</span>}
			 <div className='creditCard__info'>
				<div className='creditCard__paymentSystem'>{scheme}</div>
				<div className='creditCard__cardType'>{type}</div>
			</div>
			<span className='creditCard__amount'>{toCurrency(amount, currency)}</span>
			<span className='creditCard__cardNumber' >
				{cardNumber}
				<span className='creditCard__copyNumber' onClick={clickCopyHandler}>
					{isCopy? 'copied' :'copy'  }
				</span>
			</span>
			<span className='creditCard__expDate'>{expDate}</span>
		</div>
	);
};
