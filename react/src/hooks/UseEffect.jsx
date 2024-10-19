import React, { useState } from 'react'

const UseEffect = () => {
	const [name, setName] = useState('Charan');
	const [count, setCount] = useState(0);
	return (
		<div>
			{/* <h1>The name is {name}</h1>
			<button 
				onClick={() => setName("Charan Y")}
			>
				Click to change name
			</button> */}
			<h1>count : {count}</h1>
			<button onClick={() => setCount(prev => prev + 1)}>
				click to increase count
			</button>
		</div>
	)
}

export default UseEffect