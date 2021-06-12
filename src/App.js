import './App.css';

function App() {
	return (
		<div className="App">
			<p>Hi! I am React Person</p>
		{/*===>>React Component Call [Start]*/}	
			<Nayok></Nayok>
			<Nayok></Nayok>
			<Nayok></Nayok>
			<Nayok></Nayok>
			<Nayok></Nayok>
		{/*===>>React Component Call [End]*/}	
		</div>
	);
}

//=======>>Create Component [Start]
function Nayok(){
	const nayokStyle = {
		border: '2px solid purple',
		margin: '20px',
		borderRadius: '7px'
	}
	return(
		<div style={nayokStyle}>
			<h1>Ami Khol Nayok:  </h1>
			<h3>I have done 5 movies: </h3>
		</div>
	)
}
export default App;
