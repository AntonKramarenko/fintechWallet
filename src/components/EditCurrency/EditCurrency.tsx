import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import './EditCurrency.scss';

interface IEditCurrency{
    register: any
    errors:any
}

const input = {id: 'amount', options:{ required: true}, placeholder: 'Amount'};

export const EditCurrency: React.FC<IEditCurrency> = ({register, errors}) => {
	return (
		<div className='editCurrency'>
			<Input register={register}  errors={errors} id={input.id} options={input.options}  placeholder={input.placeholder}  />

			<select {...register('currency')} >
				<option value='UAH'>UAH</option>
				<option value='USD'>USD</option>
			</select>
      
			<div className='editCurrency__btns'>
				<Button type='submit' active={true} click={console.log} styleType='succes' title='Зберегти'/>
	  			<Button type='button' active={true} click={console.log} styleType='reject' title='Скасувати'/>
			</div>
	  		
		</div>
	);
};