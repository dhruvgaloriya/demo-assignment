import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const MyPaginator = ({ pageCount, onPageChange, currentPage }) => {
	return (
		<Stack
			spacing={2}
			sx={{ float: "right", marginBottom: "10px" }}
		>
			<Pagination
				count={pageCount}
				onChange={onPageChange}
				page={currentPage}
				variant="outlined"
				color="secondary"
			/>
		</Stack>
	);
};

MyPaginator.propTypes = {
	pageCount: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};

export default MyPaginator;
