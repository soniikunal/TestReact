import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { styled } from '@mui/system';

const CustomPagination = styled(Pagination)({
    '& .MuiPaginationItem-page': {
        color: 'inherit',
    },
    '& .selectedAnswer': {
        backgroundColor: 'green !important',
        color: "white"
    },
});
const PaginationComponent = ({ data, currentQueNo, handleChange }) => {
    return (
        <CustomPagination
            count={data?.length}
            renderItem={(item) => {
                let pageClass = '';
                // Check if the current page's category is Geography
                const currentPageData = data[item.page - 1]; // Adjust index as page is 1-based
                if (currentPageData && currentPageData.selectedAnswer !== undefined && currentPageData.selectedAnswer !== null) {
                    pageClass += 'selectedAnswer';
                }
                return (
                    <PaginationItem
                        component="div"
                        className={pageClass}

                        {...item}
                    />
                );
            }}
            page={currentQueNo} onChange={handleChange} boundaryCount={100} hideNextButton={true} hidePrevButton={true}
        />
    );
};

export default PaginationComponent;
