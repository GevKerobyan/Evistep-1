import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
	position: absolute;
	bottom: 25px;
	width: 80vw;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100px;
	flex-wrap: wrap;
`;

const PageButton = styled.button`
	border: blue;
	height: 25px;
	width: 25px;
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
	}, [currentPage, loading]);

	if (loading) {
		return null;
	} else {
		return (
			<PaginationWrapper>
				{currentPage > 3 ? (
					<>
						<PageButton onClick={() => setCurrentPage(1)}>1</PageButton>
						<span style={{ margin: '0 15px 0 5px' }}>...</span>
					</>
				) : (
					''
				)}

				{pageArr.map((item, index) => {
					return (
						<PageButton
							key={index}
							onClick={() => setCurrentPage(item)}
							style={{ backgroundColor: item === currentPage && 'red' }}
						>
							{item}
						</PageButton>
					);
				})}
				{currentPage < numOfPages - 3 ? (
					<>
						<span style={{ margin: '0 5px 0 15px' }}>...</span>
						<PageButton onClick={() => setCurrentPage(numOfPages)}>
							{numOfPages}
						</PageButton>
					</>
				) : (
					''
				)}
			</PaginationWrapper>
		);
	}
};

export default Pagination;
