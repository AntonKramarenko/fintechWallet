import React from 'react';
import { EditCurrency } from '../EditCurrency';
import { useForm, SubmitHandler } from 'react-hook-form';

import './ModalWindow.scss';

type Inputs = {
    amount: string,
    currency: string,
  };

export const ModalWindow = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	return (
		<div className='modalWindow'>
			<div className='modalWindow__body'>
				<EditCurrency register={register} errors={errors}/>
			</div>
		</div>
	);
};
