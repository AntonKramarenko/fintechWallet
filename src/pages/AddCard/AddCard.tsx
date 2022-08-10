import React from 'react';
import './AddCard.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditCurrency } from '../../components/EditCurrency';
import { Input } from '../../components/ui/Input';

type Inputs = {
    cardNumber: string,
    expDate: string,
    cw: string,
    cardHolder: string,
    amount: string,
    currency: string,
  };

export const AddCard:React.FC = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	//add error message and classes
	const inputsValue = [
		{id: 'cardNumber', options:{ required: true}, placeholder: 'Card Number'},
		{id: 'expDate', options:{ required: true}, placeholder: 'Exp. Date'},
		{id: 'cw', options:{ required: true}, placeholder: 'CW'},
		{id: 'cardHolder', options:{ }, placeholder: 'Card Holder'}
	];

	const inputs = inputsValue.map((item:any) => <Input key={item.id} register={register} errors={errors} {...item}/>);

	return (
		<div className='addCard'>
			<h1 className='addCard__title'>Додавання картки</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='addCard__form'>
				<>
					{inputs}
					<EditCurrency register={register} errors={errors}/>
				</>
			</form>
		</div>
		
	);
};
