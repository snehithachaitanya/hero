import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
function App() {
	const [isFlipped, setIsFlipped]=useState(false);
	const handleClick =() =>
	{
		setIsFlipped(!isFlipped);
	}
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
		  <div style={{backgroundColor: "green", height:150, color:"#fff",display:"flex", justifyContent:"center",alignItems:"center"}}>
		  what is the meaning of success
			<button onClick={handleClick}>Click to flip</button>
		  </div>
  
		  <div style={{backgroundColor: "red", height:150, color:"#fff",display:"flex", justifyContent:"center",alignItems:"center"}}>
          the accomplishment of an aim or purpose.		
		  <button onClick={handleClick}>Click to flip</button>
		  </div>
		</ReactCardFlip>
	  )
}

export default App