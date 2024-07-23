import * as React from 'react'

//MUI components directly used in this page.
import {Typography} from "@mui/material"
import {Box, Container} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"
import {Card, CardContent} from "@mui/material"

//using react router for links and possibly conditional rendering.
import {
	Outlet,
	Link
} from 'react-router-dom'

//google's Roboto family of fonts for general UI use.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//preconfigured wrappers around MUI and other libraries
import {Carrousel} from '../components'
import {DeskBar} from '../components'

//custom theme: 'iaçú'
import {createTheme, ThemeProvider, useTheme} from '@mui/material/styles'
import {deepmerge} from '@mui/utils'
import CssBaseline from '@mui/material/CssBaseline'
import {iaçú} from '../theme.js'

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
	<Typography align="center" variant="h5">{"honestly i'm running out of ideas."}</Typography>
]

export function HomePage(){
	return (
		<Box sx={{width:"100%", backgroundColor:"background.paper",px:1}}>
			<Box sx={{position:"relative", minHeight:"70vh"}}>
				<Box sx={{position:"absolute", overflow:"hidden",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center", width:"100%",height:"100%"}}>
					<video
						autoPlay muted loop
						src="bgvid.mp4"
						style = {{
							height:"100%",
							width:"100%",
							objectFit:"fill",
							filter:"blur(9.5px) brightness(0.86) "
						}}></video>
				</Box>
				<Box
					sx={{
						position:"relative",
						textShadow:"2px 2px 1.9px #000000, 1.6px 1.6px 7.4px #000000",
						padding:"4px"
					}}
				>
					<Typography variant="h3" component="h1"> Flavoured with Computer Science.</Typography>
					<Typography variant="h6" sx ={{maxWidth: "400px"}}>Is the spacing of elements off for you? tweak it! Is copying files manually too tedious? script it! Everything is at your fingertips if you're willing to code it.</Typography>
				</Box>

			</Box>
			<Box sx={{my:1,px:2}}>
				<Carrousel delay={2700}>
					{featured.map((e,i) => <div className="flicking-panel" key={i}><Box sx={{ display:"flex", width:"100%",height:"100%",justifyContent:"center", alignItems:"center"}}o>{e}</Box></div>)}
				</Carrousel>
			</Box>
			<Box>
			<Typography variant="body2">While there is not much content here, feel free to browse whatever is already available.</Typography>
			</Box>
		</Box>
	)
}

export function Academic(){
	return (
		<Typography variant="h2">Academic stuff.</Typography>
	)
}

export function App() {
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
				<Link ><Button variant="text"
					sx={{color:"background.paper",maxwidth:"28%"}}
					onClick={() => setContent(<Academic />)}
				>	academic media
				</Button></Link>
			</Box>
			{content}
		</Box>
	</ThemeProvider>
	)
}

export default App;
