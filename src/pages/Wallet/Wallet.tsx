import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from '../../components/CreditCard';
import { Button } from '../../components/ui/Button';
import { useAppDispatch } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import './Wallet.scss';

export const Wallet = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const addCardHandler = () =>{
		navigate('/add');
	};
	const addCashHandler = () =>{
		dispatch(isVisibleModal(true));
	};

	return (
		<div className='wallet'>
			<div className='wallet__btns'>
				<Button type='submit' active={true} click={addCardHandler} styleType='succes' title='Додати карту' />
				<Button type='submit' active={true} click={addCashHandler} styleType='succes' title='Додати готівку'/>
			</div>
			<CreditCard/>
			<CreditCard/>
		</div>
	);
};
