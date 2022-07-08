import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
	position: absolute;
	bottom: 25px;
	width: 70vw;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100px;
	flex-wrap: wrap;
`;

const PageButton = styled.button`
	border: blue;
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.7);
	// border-radius: 5px;
	// border: 1px solid black;
	margin: 0 5px;
`;

const Pagination = ({ numOfPages, currentPage, setCurrentPage, loading }) => {
	const [pageArr, setPageArr] = useState([]);
	let tempArr = [];
	useEffect(() => {
		if (currentPage < 3) {
			tempArr = [1, 2, 3, 4, 5];
		} else if (currentPage >= 3 && currentPage < numOfPages - 2) {
			for (let i = currentPage - 2; i <= currentPage + 2; i++) {
				tempArr.push(i);
			}
		} else if (currentPage >= numOfPages - 2) {
			for (let i = numOfPages - 5; i <= numOfPages; i++) {
				tempArr.push(i);
			}
		}
		setPageArr(tempArr);
		console.log('consoling: currentPage in pagination :::', currentPage);
	}, [currentPage, loading]);

	if (loading) {
		return null;
	} else {
		return (
			<PaginationWrapper>
				{pageArr.map((item, index) => {
					return (
						<PageButton key={index} onClick={() => setCurrentPage(item)}>
							{item}
						</PageButton>
					);
				})}
			</PaginationWrapper>
		);
	}
};

export default Pagination;
