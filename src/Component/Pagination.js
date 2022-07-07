import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
	position: absolute;
	bottom: 25px;
	width: 70vw;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
`;

const PageButton = styled.button`
	border: blue;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: blue;
`;

const Pagination = ({ numOfPages, currentPage, setCurrentPage }) => {

const [pageArr, setPageArr] = useState([])
useEffect(()=> {
	let tempArr = [];
	if(currentPage<3) {
		tempArr = [1,2,3,4,5]
	} else if (currentPage >=3 && currentPage<numOfPages-2) {
		for(let i = currentPage-2; i<= currentPage+2; i++) {
			tempArr.push(i)
		}
	} else if (currentPage >= numOfPages-2) {
		for(let i = numOfPages-5; i<= numOfPages; i++) {
			tempArr.push(i)
		}
	}
	setPageArr(tempArr)
	console.log('consoling: currentPage :::', currentPage )
	console.log('consoling: numOfPages :::', numOfPages )
	console.log('consoling: pageArr :::', pageArr )
},[currentPage])

   return (
		<PaginationWrapper onClick={()=> console.log('consoling: numOfPages in page :::', numOfPages )
	}>
			{pageArr.map(item => {
			return <PageButton onClick={()=>setCurrentPage(item)}>{item}</PageButton>
		})}
		</PaginationWrapper>
	);
};

export default Pagination;
