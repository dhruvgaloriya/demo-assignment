import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import MediaCard from "../card/card.component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MyPaginator from "../pagination/pagination.component";
import TextField from '@mui/material/TextField';
import Shimmer from "../skeleton/shimmer.component";

export default function HomePage() {
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(10);

	useEffect(() => {
		fetch(`https://gorest.co.in/public/v1/posts?page=${currentPage}`)
			.then((res) => res.json())
			.then((d) => {
				setData(d.data);
				setFilterData(d.data);
				setTotalCount(d.meta.pagination.total);
				setItemPerPage(d.meta.pagination.limit);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	}, [currentPage]);

	const onPageChange = (event, newPage) => {
		setCurrentPage(newPage);
	};

	if (loading) {
		return (
			<Container maxWidth="false" sx={{ padding: "8px" }}>
				<Shimmer></Shimmer>
			</Container>
		);
	}

	const handleSearch = (event) => {
		const string = event.target.value;
		if(string !== ""){
			let searchData = filterData.filter(item => item.title.toLowerCase().includes(string.toLowerCase()))
			if(searchData.length > 0){
				setFilterData(searchData)
			}
		}else{
			setFilterData(data)
		}
	}

	if (error) {
		return <div className="error">Something went wrong</div>;
	}

	return (
		<Container maxWidth="false" sx={{ padding: "8px" }}>
		
				<TextField id="standard-basic" label="Search By Title" variant="standard" size="small"onChange={handleSearch} sx={{ float:"left" , marginBottom: "10px" }}/>
				<MyPaginator
					itemCount={totalCount}
					itemsPerPage={itemPerPage}
					onPageChange={onPageChange}
					currentPage={currentPage}
					pageCount={Math.ceil(totalCount / itemPerPage)}
				/>
				
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
			>
				<Masonry gutter="10px">
					{filterData.map((item, index) => (
						<MediaCard
							key={index+1}
							image={`https://picsum.photos/200/300?random=${Math.round(
								Math.random() * 10
							)}`}
							alts={`image-${item.id}`}
							title={item.title}
							description={item.body}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</Container>
	);
}
