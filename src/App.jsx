import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div>
				<form>
					<label>Total Income</label>
					<input type='number' />
					<label>HRA</label>
					<input type='number' />
					<label>PT and Entertainment Allowance</label>
					<input type='number' />
					<label>NPS</label>
					<input type='number' />
					<label>Leave Travel Allowance</label>
					<input type='number' />
					<label>Home Loan Interest Payment</label>
					<input type='number' />
					<label>Deduction u/s 80C</label>
					<input type='number' />
					<label>Health Insurance U/s 80D</label>
					<input type='number' />
					<label>Saving Bank Interest u/s 80TTA</label>
					<input type='number' />
					<input type='submit' value='Calculate' />
				</form>
			</div>
			<div>
				<span>
					Tax Old Regime : <b>{0}</b>
				</span>
				<span>
					Tax New Regime : <b>{0}</b>
				</span>
			</div>
		</div>
	);
}

export default App;
