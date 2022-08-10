import React from 'react';
import './Button.scss';

interface IButton{
	title:string,
    type?: string,
    active:boolean,
	styleType:string,
    click:() => void
}

export const Button:React.FC<IButton> = ({type, active,click,styleType,title}) => {

	
	return (
		<> 
			{active && <button type='submit' className={`btn btn-${ styleType }`}>{title}</button>}
		</>
	);
};