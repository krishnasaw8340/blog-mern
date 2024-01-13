import { Button, Tab, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { categories } from './data'
import styled from '@emotion/styled'

const StyledTable = styled(Table)
`   border:2px solid rgba(224,224,224,1);
 `
 const StyleButton = styled(Button)`
    margin:20px;
    width: 85%;
    background: #6495ED;
    color: #fff; 
 `
const Categories = () => {
  return (
    <>
    <StyleButton variant='contained'>Add Blog</StyleButton>
    <StyledTable>
        <TableHead>
            <TableRow>
                <TableCell>
                    All Categories
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                categories.map(category=>(
                    <TableRow>
                         <TableCell>{category.type}</TableCell>
                    </TableRow>
                ))
            }
           
        </TableBody>
    </StyledTable>
    </>
  )
}

export default Categories