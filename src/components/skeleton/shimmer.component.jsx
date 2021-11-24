import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Shimmer() {
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 1 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{Array.from(new Array(20)).map((item, index) => (
				<Grid item xs={12} sm={12} md={3} key={index}>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={200}
					/>
					<Box sx={{ pt: 0.5 }}>
						<Skeleton />
						<Skeleton />
						<Skeleton width="60%" />
						<Skeleton width="60%" />
						<Skeleton width="60%" />
					</Box>
				</Grid>
			))}
		</Grid>
	);
}

export default Shimmer;
