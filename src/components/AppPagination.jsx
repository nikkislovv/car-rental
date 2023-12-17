import React, { useState } from "react"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const AppPagination = ({totalPages, changePage, pageNumber}) => {

  return (
    <Stack spacing={2} sx={{margin: "20px", position: "inherit"}}>
        <Pagination
            color="primary"
            count={totalPages}
            onChange={(event, page) => changePage(page)}
            page={pageNumber}
        />
    </Stack>
  )
};

export default AppPagination;
