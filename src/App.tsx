import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BalanceBar } from './components/BalanceBar';
import { ModalWindow } from './components/ModalWindow';
import { AddCard } from './pages/AddCard';
import { Wallet } from './pages/Wallet';
import './styless/index.scss';

function App() {
	return (
		<div className='app'>
			<BalanceBar/>
			{/* <ModalWindow/> */}
			<div className='container'>
				<Routes>
					<Route path='/wallet' element={<Wallet/>} />
					<Route path='/add' element={<AddCard/>} />
					<Route path='*' element={ <Navigate to='/wallet'/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
