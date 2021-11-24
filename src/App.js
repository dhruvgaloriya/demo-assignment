import React, { Suspense } from "react";
import Typography from '@mui/material/Typography';
import Shimmer from "./components/skeleton/shimmer.component";
const HomePage = React.lazy(() => import("./components/Landing/landing.component"))

function App() {
	return (
		<div className="App">
			<Typography variant="h3" mt={2} sx={{textAlign:"center"}}>Application List</Typography>
			<Suspense fallback={<Shimmer/>}>
				<HomePage/>
			</Suspense>
		</div>
	);
}

export default App;
