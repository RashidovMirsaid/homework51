import { useState } from 'react';
import Ball from './components/Ball/Ball';
import './assets/global.css';

function App() {
	const firstNumbers: number[] = [5, 11, 16, 23, 32];
	const [number, setNumber] = useState<number[]>(firstNumbers);

	const generateRandomNumbers = () => {
		const randomNumbers: number[] = [];

		while (randomNumbers.length < 5) {
			const randomNumber: number = Math.floor(Math.random() * 32 + 5);
			if (!randomNumbers.includes(randomNumber)) {
				randomNumbers.push(randomNumber);
			}
		}
		return randomNumbers.sort((a, b) => a - b);
	};

	const changeNumbers = () => {
		const numbers = generateRandomNumbers();
		setNumber(numbers);
	};

	return (
		<div className='App'>
			<div className='container'>
				<Ball number={number[0]} />
				<Ball number={number[1]} />
				<Ball number={number[2]} />
				<Ball number={number[3]} />
				<Ball number={number[4]} />
				<button onClick={changeNumbers}>Change numbers</button>
			</div>
		</div>
	);
}

export default App;
