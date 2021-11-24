import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function MediaCard({ image, alts, title, description }) {
	return (
		<Card variant="outlined">
			<CardMedia
				component="img"
				height="140"
				image={image}
				alt={alts}
				loading="lazy"
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default MediaCard;
