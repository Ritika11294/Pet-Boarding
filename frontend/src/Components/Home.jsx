import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from "react-redux";
import {addData} from "../Redux/action";
import axios from "axios";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function Home () {
  
       const {data}  = useSelector((store) => (store.data));
       //console.log(data)

       const dispatch = useDispatch(); 
       const navigate = useNavigate();

       const getData = () => {
           axios.get("http://localhost:8080/entities").then((res) => {
               //console.log(res.data)
               dispatch(addData(res.data))
           })
       }

       useEffect(() => {
           getData()
       }, [])

       const handleRequest = (id) => {
         navigate(`/listing/${id}`)
       }

       const sortingCost = (sort) => {
        axios.get(`http://localhost:8080/entities`).then((res) => {
            let costSort = res.data;
            //console.log(ageSort)
            if(sort == "asc") {
                const store = costSort.sort((a, b) => {
                    return a.costPerDay - b.costPerDay
                })
                dispatch(addData(store))
            }
            else {
                const store = costSort.sort((a, b) => {
                    return b.costPerDay - a.costPerDay
                })
                dispatch(addData(store))
            }
        
        })
    }

    const sortingRate = (sort) => {
      axios.get(`http://localhost:8080/entities`).then((res) => {
          let sortRate = res.data;
          //console.log(ageSort)
          if(sort == "asc") {
              const store = sortRate.sort((a, b) => {
                  return a.rating - b.rating
              })
              dispatch(addData(store))
          }
          else {
              const store = sortRate.sort((a, b) => {
                  return b.rating - a.rating
              })
              dispatch(addData(store))
          }
      
      })
  }

      const filterVerified = (filter) =>{
        axios.get(`http://localhost:8080/entities?verified=${filter}`).then((res) => {
          dispatch(addData(res.data));
        })
      }


      const handleRefresh = () => {
        getData();
      }
    
       

  return (
      <>
        <Button style={{margin:'10px'}} onClick={() => filterVerified("yes")} variant="contained">Filter Verified Place</Button>
        <Button style={{margin:'10px'}} onClick={() => {sortingCost("asc")}} variant="contained">Sort By Cost Asc</Button>
        <Button style={{margin:'10px'}} onClick={() => {sortingCost("dsc")}}variant="contained">Sort By Cost Des</Button>
        <Button style={{margin:'10px'}} onClick={() => {sortingRate("asc")}}variant="contained">Sort By Rating Asc</Button>
        <Button style={{margin:'10px'}} onClick={() => {sortingRate("dsc")}}variant="contained">Sort By Rating Dsc</Button>
        <Button style={{margin:'10px'}} onClick={handleRefresh} variant="contained">Refresh</Button>
       

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Capacity</StyledTableCell>
            <StyledTableCell align="right">Cost per day</StyledTableCell>
            <StyledTableCell align="right">Verified</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <StyledTableRow key={e.id} onClick={() => {handleRequest(e.id);}}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell align="right">{e.name}</StyledTableCell>
              <StyledTableCell align="right">{e.city}</StyledTableCell>
              <StyledTableCell align="right">{e.address}</StyledTableCell>
              <StyledTableCell align="right">{e.capacity}</StyledTableCell>
              <StyledTableCell align="right">{e.costPerDay}</StyledTableCell>
              <StyledTableCell align="right">{e.verified}</StyledTableCell>
              <StyledTableCell align="right">{e.rating}</StyledTableCell>
              <StyledTableCell align="right"><img src={e.image} alt="" width="100px"/> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
   
  );
}





// export const Home = () => {
//     const {data} = useSelector((store) => (store.data));
//     const dispatch = useDispatch();


//   return (
//       <>
      
//       </>
//   )
// }