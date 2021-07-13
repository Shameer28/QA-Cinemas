const VariableList = ({data, setFunc, updateFunc, defaultVal}) => {
	const add = (e) => {
		e.preventDefault();

		setFunc( (x)=> {
			return [...x, defaultVal];
		} );
	}

	const remove = (e)=> {
		e.preventDefault();
		setFunc( (x)=> {
			let a = [...x]
			if (x.length > 1) {
				a.pop();
				return a;
			}
			return a;
		} );
	}

	return ( 
		<div>
			<button onClick={add}>+</button>
			<button onClick={remove}>-</button>
			<br />

		{data.map((value, i)=> {
			return (
				<div>
					<input type="text" key={i} onChange={ (e) => { updateFunc(e.target.value, i) }} value={value} />
					<br />
				</div>
			)
			
		})}
		</div>
	 );
}
 
export default VariableList;