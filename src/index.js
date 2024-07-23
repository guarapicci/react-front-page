import React from 'react';
import ReactDOM from 'react-dom/client';

import {
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom"

//import './index.css';
import {App,HomePage} from './routes/App';
import Pallo from './routes/Pallo';
import FT from './routes/FT';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/pallo",
		element: <Pallo />
	},
	{
		path: "/flicker-test",
		element: <FT />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
