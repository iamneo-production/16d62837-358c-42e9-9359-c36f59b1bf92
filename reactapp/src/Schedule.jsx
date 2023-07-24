// import * as React from 'react';
// import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// // import Title from './Title';
// import AppBar from './Homepage';

// // Generate Order Data
// function createData(lesson, start, end, title, tutor) {
//   return { lesson, start, end, title, tutor };
// }

// const rows = [
//   createData(
//     0,
//     '09:00 AM',
//     '10:00 AM',
//     'C++',
//     'Geerinath',
//   ),
//   createData(
//     1,
//     '10:15 AM',
//     '12:00 PM',
//     'C++',
//     'Geerinath',
//   ),
//   createData(
//     3,
//     '02:00 PM',
//     '02:30 PM',
//     'Python',
//     'Sofia',
//   ),
//   createData(
//     4,
//     '04:00 PM',
//     '05:00 PM',
//     'Java',
//     'Rohini',
//   ),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Orders() {
//   return (
    
      
//       <React.Fragment>
//         <AppBar />
//         <Title>Recent Orders</Title>
//         <Table size="small">
//           <TableHead>
//             <TableRow>
//               <TableCell align='center'>Start-Time</TableCell>
//               <TableCell align='center'>End-Time</TableCell>
//               <TableCell align='center'>Course-Title</TableCell>
//               <TableCell align='center'>Tutor</TableCell>
//               {/* <TableCell align="right">Sale Amount</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell align='center'>{row.start}</TableCell>
//                 <TableCell align='center'>{row.end}</TableCell>
//                 <TableCell align='center'>{row.title}</TableCell>
//                 <TableCell align='center'>{row.tutor}</TableCell>
//                 {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//           See more orders
//         </Link>
//       </React.Fragment>
//   );
// }
