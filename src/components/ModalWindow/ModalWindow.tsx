import React from 'react';
import { EditCurrency } from '../EditCurrency';
import { useForm, SubmitHandler } from 'react-hook-form';

import './ModalWindow.scss';
import { useAppDispatch } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import { changeCash } from '../../store/balance';

type Inputs = {
    amount: string,
    currency: string,
  };

export const ModalWindow = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<Inputs> = data => {
		dispatch(changeCash(data));
		dispatch(isVisibleModal(false));
	};

	const handleSucces  = ()=>{
	
	};

	const handleReject = ()=>{
		dispatch(isVisibleModal(false));
	};

	return (
		<div  className='modalWindow'>
			<form onSubmit={handleSubmit(onSubmit)} className='modalWindow__body'>
				<EditCurrency register={register} errors={errors} clickSucces={handleSucces} clickReject={handleReject}/>
			</form>
		</div>
	);
};
