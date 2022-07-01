import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useTasksQuery } from '../app/services/GetUserRecords';
import { Avatar} from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BasicModal from './Modals/DeleteUser';
import TableLoader from './TableLoader';

export default function CustomizedTables() {
    const { data, error, isLoading, isSuccess } = useTasksQuery("/users");
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#1976d2",
            color: theme.palette.common.white,
            fontSize: 16
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
      }));
      
     const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
      }));

    return (
        <>
            <Container style={{ marginTop: "2rem" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Profile Pic</StyledTableCell>
                                <StyledTableCell>Username</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">City</StyledTableCell>
                                <StyledTableCell align="left">Company Name</StyledTableCell>
                                <StyledTableCell align="left">Website</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!!isLoading && (<>
                                <TableLoader />
                                <TableLoader />
                                <TableLoader />
                            </>)}
                            {!!isSuccess && (data?.map((row: { id:number|  undefined; username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; address: { city: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; company: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; website: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                                <StyledTableRow key={row.id} onClick={()=>setId(row.id ? row.id :1)}>
                                    <StyledTableCell component="th" scope="row">
                                        <Avatar />
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.username}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                                    <StyledTableCell align="left">{row.address.city}</StyledTableCell>
                                    <StyledTableCell align="left">{row.company.name}</StyledTableCell>
                                    <StyledTableCell align="left">{row.website}</StyledTableCell>
                                    <StyledTableCell align="left" style={{ cursor: "pointer" }}><BorderColorOutlinedIcon /></StyledTableCell>
                                    <StyledTableCell align="left" style={{ cursor: "pointer" }}><DeleteOutlineOutlinedIcon onClick={handleOpen} /></StyledTableCell>
                                </StyledTableRow>      
                            )))
                        }
                        <BasicModal open={open} onClose={handleClose} id={id} />
                            {!!error &&  <StyledTableRow>
                                    <StyledTableCell component="th" scope="row" align="center">
                                       Data couldn't be Loaded!
                                    </StyledTableCell>
                                </StyledTableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}