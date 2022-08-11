import React, { useState } from 'react';
import { maskedNumber } from '../../helpers/maskedNumber';
import { toCurrency } from '../../helpers/toCurrency';
import './CreditCard.scss';
import MasterCardLogo from '../../assets/schemaLogo/mastercard-logo.png';
import VisaLogo from '../../assets/schemaLogo/visa-logo.png';
import { Button } from '../ui/Button';
import { useAppDispatch } from '../../store';
import { deleteCard } from '../../store/cards';


interface ICreditCard{
	bank?: string | undefined,
	scheme?:string | undefined,
	type?:string | undefined,
	amount: string,
	currency: string,
	cardNumber:string,
	expDate: string
}

export const CreditCard: React.FC<ICreditCard> = ({bank='bank',scheme = 'schema',type = 'type',amount,cardNumber,expDate,currency}) => {
	const [ isCopy, setIsCopy ] = useState(false);
	const dispatch = useAppDispatch();

	const clickCopyHandler = () =>{
		navigator.clipboard.writeText(cardNumber);
		setIsCopy(true);
	};

	const schemaFormater = (schema:string)=>{
		const imgJSX = (logo:any) => <img className='creditCard__schemaLogo' src={logo} alt={schema} />;

		switch (schema.toLowerCase()) {
		case 'mastercard': return imgJSX(MasterCardLogo);
		case 'visa': return imgJSX(VisaLogo);
		default: return schema;
		}
	};

	const deleteCardHandler = (event) =>{
		event.preventDefault();

		dispatch(deleteCard({cardNumber}));

		console.log(cardNumber);
		

	};

	return (
		<div className='creditCard'>
			<div className='creditCard__card'>
				{bank && <span className='creditCard__bank'>{bank}</span>}
			 <div className='creditCard__info'>
					<div className='creditCard__paymentSystem'>
						{schemaFormater(scheme) }
					</div>
					<div className='creditCard__cardType'>{type}</div>
				</div>
				<span className='creditCard__amount'>{toCurrency(amount, currency)}</span>
				<span className='creditCard__cardNumber' >
					{isCopy ? cardNumber : maskedNumber(cardNumber) }
					<span className='creditCard__copyNumber' onClick={clickCopyHandler}>
						{isCopy? 'copied' :'copy'  }
					</span>
				</span>
				<span className='creditCard__expDate'>{expDate}</span>
			</div>
			<Button title={'Видалити'} type={'reject'} active={true} styleType={'reject'} click={deleteCardHandler}/>
		</div>
		
	);
};
