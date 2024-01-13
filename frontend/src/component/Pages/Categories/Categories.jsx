import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material'
import React from 'react'
import { categories } from './data'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  border: 2px solid rgba(224, 224, 224, 1);
`;

const StyleButton = styled(Button)`
  width: 85%;
  background: #8C52FF;
  color: #fff;
  margin-bottom: 16px;

  &:hover {
    background: #5a34aa; /* Change the color on hover */
  }
`;
const Categories = () => {
  return (
    <>
       <Link to='/create'>
        <StyleButton variant="contained">Add Blog</StyleButton>
       </Link>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>All Categories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
    </>
  );
};

export default Categories;
