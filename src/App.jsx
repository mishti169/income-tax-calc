import { useState } from 'react';
import './App.css';
import { getNewCalTax, getOldCalTax } from './util';

function App() {
	const [oldTax, setOldTax] = useState(0);
	const [newTax, setNewTax] = useState(0);

	const [userInput, setUserInput] = useState({
		totalIncome: 0,
		sd: 0,
		hra: 0,
		pt: 0,
		nps: 0,
		lta: 0,
		hl: 0,
		section80C: 0,
		hi: 0,
		section80TTA: 0,
	});

	const onInputFocus = (event) => {
		event.target.select();
	};

	const changeInputVal = (event) => {
		setUserInput((x) => {
			return { ...x, [event.target.name]: +event.target.value };
		});
	};

	const onSubmitGetTax = (event) => {
		event.preventDefault();

		const taxableIncome =
			userInput.totalIncome -
			userInput.sd -
			userInput.hra -
			userInput.pt -
			userInput.nps -
			userInput.lta -
			userInput.hl -
			userInput.section80C -
			userInput.hi -
			userInput.section80TTA;

		const oldTaxAmount = getOldCalTax(taxableIncome);
		const newTaxAmount = getNewCalTax(userInput.totalIncome);

		setOldTax(oldTaxAmount);
		setNewTax(newTaxAmount);
	};

	return (
		<div className='App'>
			<h1>Income Tax Calculator</h1>
			<div className='form-wrapper'>
				<form onSubmit={onSubmitGetTax} onFocus={onInputFocus}>
					<label>Total Income</label>
					<input
						name='totalIncome'
						type='number'
						value={userInput.totalIncome}
						onChange={changeInputVal}
					/>
					<label>Standard Deduction</label>
					<input
						name='sd'
						type='number'
						value={userInput.sd}
						onChange={changeInputVal}
					/>
					<label>HRA</label>
					<input
						name='hra'
						type='number'
						value={userInput.hra}
						onChange={changeInputVal}
					/>
					<label>PT and Entertainment Allowance</label>
					<input
						name='pt'
						type='number'
						value={userInput.pt}
						onChange={changeInputVal}
					/>
					<label>NPS</label>
					<input
						name='nps'
						type='number'
						value={userInput.nps}
						onChange={changeInputVal}
					/>
					<label>Leave Travel Allowance</label>
					<input
						name='lta'
						type='number'
						value={userInput.lta}
						onChange={changeInputVal}
					/>
					<label>Home Loan Interest Payment</label>
					<input
						name='hl'
						type='number'
						value={userInput.hl}
						onChange={changeInputVal}
					/>
					<label>Deduction u/s 80C</label>
					<input
						name='section80C'
						type='number'
						value={userInput.section80C}
						onChange={changeInputVal}
					/>
					<label>Health Insurance U/s 80D</label>
					<input
						name='hi'
						type='number'
						value={userInput.hi}
						onChange={changeInputVal}
					/>
					<label>Saving Bank Interest u/s 80TTA</label>
					<input
						name='section80TTA'
						type='number'
						value={userInput.section80TTA}
						onChange={changeInputVal}
					/>
					<input type='submit' value='Calculate' />
				</form>
			</div>
			<div>
				<span>
					Tax Old Regime : <b>{oldTax}</b>
				</span>
				<span>
					Tax New Regime : <b>{newTax}</b>
				</span>
			</div>
		</div>
	);
}

export default App;
