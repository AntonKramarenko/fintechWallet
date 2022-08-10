import React from 'react';
import './Input.scss';

interface IInput{
    register:any,
    errors:any,
    options:any,
    placeholder: string,
    id:string
}

export const Input:React.FC<IInput> = ({register,errors,options,placeholder,id}) => {


	return (
		<div className='input'>
			<input {...register(id, options )} placeholder={placeholder} className='input__field'/>
			{errors.cw?.message && <p className='input__error'>{errors.id?.message}</p>}
		</div>
	);
};
