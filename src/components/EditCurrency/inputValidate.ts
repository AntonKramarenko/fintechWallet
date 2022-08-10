export const isValidAmount = (value:string) =>{
	if(!+value){
		return 'Введіть коректні числа';
	}
};