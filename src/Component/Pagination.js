import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
	margin-bottom: 25px;
`;

const PageButton = styled.div`
	border: blue;
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(173, 216, 230, 0.8);
	margin: 0 5px;
	cursor: pointer;
	border-radius: 2px;
	&:hover {
		background-color: rgb(173, 216, 230);
	}
`;

const Pagination = ({ numOfPages, currentPage, setCurrentPage, loading }) => {
	const [pageArr, setPageArr] = useState([]);
	console.log('currentPage : ', currentPage)
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

	useEffect(() => {
		console.log('consoling: currentPage :::', currentPage);
	}, [currentPage]);

	if (loading) {
		return null;
	} else {
		return (
			<PaginationWrapper>
				{currentPage > 3 ? (
					<>
						<PageButton
							onClick={() => {
								window.scroll(0, 0);
								setCurrentPage(currentPage);
							}}
						>
							1
						</PageButton>
						<span style={{ margin: '0 15px 0 5px' }}>...</span>
					</>
				) : (
					''
				)}

				{pageArr.map((item, index) => {
					return (
						<PageButton
							key={index}
							onClick={() => {
								window.scroll(0, 0);
								setCurrentPage(item);
							}}
							style={{
								backgroundColor: item === currentPage && 'rgba(255, 255, 255, 0.8)',
							}}
						>
							{item}
						</PageButton>
					);
				})}
				{currentPage < numOfPages - 3 ? (
					<>
						<span style={{ margin: '0 5px 0 15px' }}>...</span>
						<PageButton
							onClick={() => {
								window.scroll(0, 0);
								setCurrentPage(numOfPages);
							}}
						>
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
