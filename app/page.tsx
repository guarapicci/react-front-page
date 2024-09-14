"use client"

import * as React from 'react'

//MUI components directly used in this page.
import {Typography} from "@mui/material"
import {Box, Container} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"
import {Card, CardContent} from "@mui/material"


// //using react router for links and possibly conditional rendering.
// import {
// 	Outlet,
// 	Link
// } from 'react-router-dom'

//google's Roboto family of fonts for general UI use.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//preconfigured wrappers around MUI and other libraries
import {Carrousel} from './components'
import {DeskBar} from './components'

//custom theme: 'iaçú'
import {createTheme, ThemeProvider, useTheme} from '@mui/material/styles'
import {deepmerge} from '@mui/utils'
import CssBaseline from '@mui/material/CssBaseline'
import {iaçú} from './theme.js'

const baseTheme = createTheme()
// const partialTheme = createTheme(iaçú)
const customTheme = createTheme(deepmerge(baseTheme,iaçú))
// const customTheme = createTheme(deepmerge(iaçú,baseTheme))
// const customTheme = createTheme(iaçú,baseTheme)
// const customTheme = createTheme(iaçú)
//console.log("base theme:" + JSON.stringify(baseTheme))

// const customTheme = createTheme({
// 	palette:{
// 		mode: 'dark'
// 	}
// })

const featured=[
	<Box component="img" src="lizard-white.png" maxwidth="100%" height="auto"></Box>,
	<Box sx={{width:"100%",height:"100%", display:"grid", gridTemplateRows: "repeat(2)"}}>
		<Typography align="center" variant="h5">{"development environment powered by:"}</Typography>
		<Box sx={{width:"100%",display:"flex",justifyContent:"center"}}> <Box component="img" src="archlinux.svg" sx={{maxWidth:"100%",height:"auto"}} ></Box></Box>
	</Box>,
	<Typography align="center" variant="h5">{"scroll content over."}</Typography>
]

function HomePage(){
	return (
		<Box sx={{width:"100%", backgroundColor:"background.paper",p:1}}>
			<Box sx={{position:"relative", minHeight:"70vh"}}>
				<Box sx={{position:"absolute",
					overflow:"hidden",
					top:0,
					left:0,
					display:"flex",
					alignItems:"center",
					justifyContent:"center",
					width:"100%",
					height:"100%",
					textShadow:"2px 2px 1.9px #000000, 1.6px 1.6px 7.4px #000000",
				}}>


					<video
						autoPlay muted loop
						src="bgvid.mp4"
						style = {{
							height:"100%",
							width:"100%",
							objectFit:"fill",
							filter:"blur(9.5px) brightness(0.86) "
						}}></video>
					<Typography variant="h3" component="h1" sx={{position:"absolute", top:"0px"}}> A small front page.</Typography>
					<Typography variant="h6" sx ={{position: "absolute", bottom:"0px"}}>subtitle..</Typography>
				</Box>


			</Box>
			<Box sx={{my:1}}>
				<Carrousel delay={2700}>
					{featured.map((e,i) => <div className="flicking-panel" key={i}><Box sx={{ display:"flex", width:"100%",height:"100%",justifyContent:"center", alignItems:"center"}}>{e}</Box></div>)}
				</Carrousel>
			</Box>
			<Box>
			<Typography variant="body2">While there is not much content here, feel free to browse whatever is already available.</Typography>
			</Box>
		</Box>
	)
}

function Academic(props){
	return (
		<Box sx={props.sx} >
		<Typography variant="h2">Academic works by yours truly.</Typography>
		<Typography variant="h3">Omniglass</Typography>
		<Typography variant="body">
		<p>Ubiquitous in laptop-type computers, the touchpad is used as a pointer controller, a role also applied to the computer mouse. On a quest to enable use-cases that do not assign pointer role to touchpad interactions, Omniglass aims to provide an easy-to-use multitouch gesture API that includes not only the well-known dragging, pinching and rotating gestures, but also raw touchpoints data for custom gestures, as well as constructs for position-based gestures (as in: touched left-half, or dragged from top-left corner). </p>
		<p>The sister-project Glassd demonstrates use of those new gesture-detection capabilities to interact with applications that only support keyboard and mouse.</p>
		</Typography>
	</Box>
	)
}

function App() {
	const [content, setContent] = React.useState(<HomePage />)

  return (
	<ThemeProvider theme={customTheme} >
		<CssBaseline />
		<Box sx={{width:"100%",height:"100%"}}>
			<Box sx={{backgroundColor:"primary.main", color:"background.paper", width:"100%", display:"flex",px:1}}>
				<Box component="img"
					src="lizard.png"
					sx={{height:"41px",py:0.31}}></Box>
				<Button variant="text"
					sx={{color:"background.paper"}}
					onClick={() => setContent(<HomePage />)}
				>	home
				</Button>
				<Button variant="text"
					sx={{color:"background.paper",maxwidth:"28%"}}
					onClick={() => setContent(<Academic sx={{padding:1, backgroundColor:"background.paper",p:1, height:"100vh"}}/>)}
				>	academic media
				</Button>
			</Box>
			{content}
		</Box>
	</ThemeProvider>
	)
}

export default function Page(){
	return <App/>
};

// // `app/page.tsx` is the UI for the `/` URL
// export default function Page() {
//   return <h1>Hello, Home page!</h1>
// }
