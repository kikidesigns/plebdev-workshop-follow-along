import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// React gives us some special capabilities/features not available in standard web apps
// Here we are inserting our react app into the standard javascript based webpage
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)