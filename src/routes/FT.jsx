import * as React from 'react'
import { useRef } from 'react'

import Flicking from '@egjs/react-flicking'
import "@egjs/react-flicking/dist/flicking.css"

function FT(){
	const sample_panel = [1,2,3];
	const [nPans, setNPans] = React.useState(2)

	const theFlicking = useRef(null)

	return (
		<div style={{width:"100%",height:"100%"}}>
			<button style={{
				width:"270px", 
				backgroundColor:"#335FE1", 
				textAlign:"center",
				color:"#E9DAE2",
				fontWeight:"bold",
				fontSize:"60px" }}
 
				//change panels-per-view on clicking the button.
				onClick={() => {
					console.log("toggle clicked.")

					//using temporary variable for new panel count
					let marau=1
					if(theFlicking.current.panelsPerView==1){
						marau = 2
					}
					else{
						marau = 1
					}
					//none of these change the panels.
					theFlicking.current.forceUpdate()
					theFlicking.current.resize()

					//setting the variable directly on the class works.
					theFlicking.current.panelsPerView=marau

					//reset index directly.
					theFlicking.current.moveTo(0)

					console.log("toggle button clicked, Flicking.panelsPerView is now " + theFlicking.current.panelsPerView)
				}}>
		TOGGLE</button>
				<h5>panelsPerView react property is now {nPans}</h5>
				<Flicking
					//React ref to call methods and set properties.
					ref={theFlicking}

					//Changing this property on the component does not change the corresponding property on the javascript object.
					panelsPerView={nPans}

					align="prev"
					onChanged={() => {
						if (nPans==2){
							setNPans(1)
						}
						else{
							setNPans(2)
						}
					}}
				>
					{sample_panel.map((e, i) => 
						<div className="flicking-panel" key={i} ><div width="100%"><h2>{e}</h2></div></div>)
					}
				</Flicking>
		</div>
	)
}

export default FT;
