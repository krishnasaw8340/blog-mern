import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import React from 'react';
import { categories } from './data';
import styled from '@emotion/styled';
import { Link, useSearchParams } from 'react-router-dom';

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

const CategoryLink = styled(Link)`
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8C52FF; /* Change the color on hover */
  }
`;

const AllCategoriesLink = styled(Link)`
  color: #8C52FF; /* Set color for the sub-heading */
  text-decoration: none;
  font-weight: bold; /* Make it bold to differentiate */
  font-size: 18px; /* Adjust font size as needed */
  margin-bottom: 10px; /* Add some spacing at the bottom */

  &:hover {
    color: #5a34aa; /* Change the color on hover */
  }
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <>
      <Link to={`/create?category=${category || ''}`}>
        <StyleButton variant="contained">Add Blog</StyleButton>
      </Link>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <AllCategoriesLink to='/'>
                All Categories
              </AllCategoriesLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <CategoryLink to={`/?category=${category.type}`}>
                  {category.type}
                </CategoryLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
